const express = require("express");
const app = express();


app.get("/", function(req, res){
    res.send("Ola servidor rodando!");
});

// PARAMENTROS OPCINOAIS ":artigo?, por exemplo"
app.get("/blog/:artigo?", function(req, res){

    var artigo = req.params.artigo;

    if(artigo) {
        res.send(`<h2>Artigo ${artigo}</h2>`);
    } else {
        res.send("<h3>Bem vindo ao meu blog!</h3>");
    }
    
});

//criando paramentro /:cargo/:nome
app.get('/ola/:nome/:empresa', function(req, res) {
    // REQ => DADOS ENVIADOS PELO USUÁRIO
    // RES => RESPOSTA QUE VAI SER ENVIADA PARA O USUÁRIO
    var nome = req.params.nome;
    var empresa = req.params.empresa;
    res.send(`Oi ${nome}
              Empresa: ${empresa}`);
});



app.listen(8081, function(erro){
    if (erro) {
        console.log("Ocorreu um erro!!!");
    } else {
        console.log("Servidor iniciado com sucesso!!")
    }
    
});