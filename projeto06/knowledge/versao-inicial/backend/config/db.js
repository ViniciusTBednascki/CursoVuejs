const config = require('../knexfile')
const knex = require('knex')(config)

knex.migrate.latest([config]) //pode não ser uma boa prática pois não há um grande controle das migrations
module.exports = knex