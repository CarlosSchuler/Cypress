const express = require('express')
const { read } = require('fs')
const app = express()

app.get('/', function(req,res){
    res.json({message:'Hello world'})
})

app.get('/avengers',function(req,res){
    var avengers = ["Tony", "Natasha", "Steve"]
    return res.json({data:avengers})
})

app.get('/cnh',function(req,res){
    const idade = req.query.idade

    if (!idade) {
        return res.json({message: "Preencher campos."})
    };

    var idadeNum = parseInt(idade);

    if (idadeNum >= 18) {
        return res.json({message: "Idade já pode retirar CNH"});
    } else if (idadeNum > 10) {
        return res.json({message: "falta pouco"});
    } else {
        return res.json({message: "Falta muito!"});
    }

})

app.listen(3000)