const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validate

    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }
    
    const save = async (req, res) => {
        const user = { ...req.body }
        if(req.params.id) user.id = req.params.id

        if(!req.originalUrl.startsWith('/users')) user.admin = false
        if(!req.user || !req.user.admin) user.admin = false

        try {
            existsOrError(user.name, "Nome não foi informado")
            existsOrError(user.email, "E-mail não foi informado")
            existsOrError(user.password, "Senha não foi informada")
            existsOrError(user.confirmPassword, "Confirmação de senha inválida")
            equalsOrError(user.password, user.confirmPassword, "Senhas não conferem")

            const userFromDB = await app.db('users').where({email: user.email}).first()
            if(!user.id) {
                notExistsOrError(userFromDB, "Usuário já cadastrado")
            }
        } catch(msg) {
            return res.status(400).send(msg)
        }

        user.password = encryptPassword(user.password)
        delete user.confirmPassword

        if(user.id) {
            app.db('users').update(user)
                .where({ id: user.id })
                .whereNull('deletedAt')
                .then(() => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('users').insert(user)
                .then(() => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const get = async (req, res) => {
        const limit = parseInt(req.query.limit) || 1000 //usando para a paginação
        const page = parseInt(req.query.page) || 1

        const result = await app.db('users').whereNull('deletedAt').count('id').first()
        const count = parseInt(result.count)

        app.db('users')
            .select('id', 'name', 'email', 'admin')
            .whereNull('deletedAt')
            .limit(limit).offset(page * limit - limit)
            .then(users => res.json({ data: users, count, limit }))
            .catch(err => res.status(500).send(err))
    }    

    const getById = async (req, res) => {
        const userId = req.params.id
        app.db('users')
            .select('id', 'name', 'email', 'admin')
            .where({ id: userId })
            .whereNull('deletedAt').first()
            .then(user => res.json(user))
            .catch(err => res.status(500).send(err))
    }
    
    const remove = async (req, res) => {
        try {
            const articles = await app.db('articles')
                .where({ userId: req.params.id })
            notExistsOrError(articles, 'Usuário possui artigos!')

            const rowsUpdate = await app.db('users')
                .update({ deletedAt: new Date() })
                .where({ id: req.params.id })
            existsOrError(rowsUpdate, 'Usuário não foi encontrado.')

            res.status(204).send()
        } catch(msg) {
            return res.status(400).send(msg)
        }
    }

    return { save, get, getById, remove }
}