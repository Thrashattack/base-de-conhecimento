const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/knowledge_stats_prod', { useNewUrlParser: true})
.catch(e => {
    const msg = "ERRO! Não foi possível conectar ao MongoDB"
    console.log('\x1b[41m%s\x1b[31m', msg, '\x1b[0m')
})