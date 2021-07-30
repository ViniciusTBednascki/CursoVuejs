const app = require('express')()
const consign = require('consign')
const db = require('./config/db')

app.db = db

consign()
    .then('./config/middlewares.js')
    .then('/api/validate.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

const port = 3000
app.listen(port, () => {
    console.log(`O servido está escutando na porta ${port}`)
})