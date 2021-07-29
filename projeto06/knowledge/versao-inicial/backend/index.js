const app = require('express')()

const port = 3000
app.listen(port, () => {
    console.log(`O servido está escutando na porta ${port}`)
})