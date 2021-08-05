module.exports = app => {
    const { existsOrError, notExistsOrError } = app.api.validate

    const save = (req, res) => {
        const article = { ...req.body }
        if(req.params.id) article.id = req.params.id

        try {
            existsOrError(user.name, "Nome não foi informado")
            existsOrError(user.description, "Descrição não foi informada")
            existsOrError(user.categoryId, "Categoria não foi informada")
            existsOrError(user.userId, "Autor não foi informado")
            existsOrError(user.content, "Conteúdo não foi informado")
        } catch(msg) {
            return res.status(400).send(msg)
        }

        if(article.id) {
            app.db('articles').update(article).where({ id: article.id })
                .then(() => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('articles').insert(article)
                .then(() => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const remove = async (req, res) => {
        try {
            const rowsDeleted = await app.db('articles')
                .where({ id: req.params.id}).del()
            existsOrError(rowsDeleted, "Artigo não foi encontrado")

            res.status(204).send()
        } catch(msg) {
            res.status(400).send(msg)
        }
    }
}