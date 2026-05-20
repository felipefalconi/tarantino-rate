var avaliacaoModel = require("../models/avaliacaoModel")


function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idUsuario = req.body.idUsuarioServer;
    var idFilme = req.body.idFilmeServer;
    var notaGeral = req.body.notaGeralServer;
    var notaDialogo = req.body.notaDialogoServer;
    var notaTrilhaSonora = req.body.notaTrilhaSonoraServer;
    var notaSangue = req.body.notaSangueServer;
    var notaTensao = req.body.notaTensaoServer;
    var destaqueMedalha = req.body.destaqueMedalhaServer;
    var emocaoDominante = req.body.emocaoDominanteServer;

    // Faça as validações dos valores
    if (idUsuario == undefined) {
        res.status(400).send("O idUsuario está undefined!");
    } else if (idFilme == undefined) {
        res.status(400).send("O idFilme está undefined!");
    } else if (notaGeral == undefined) {
        res.status(400).send("A notaGeral está undefined!");
    } else if (notaDialogo == undefined) {
        res.status(400).send("A notaDialogo está undefined!");
    } else if (notaTrilhaSonora == undefined) {
        res.status(400).send("A notaTrilhaSonora está undefined!");
    } else if (notaSangue == undefined) {
        res.status(400).send("A notaSangue está undefined!");
    } else if (notaTensao == undefined) {
        res.status(400).send("A notaTensao está undefined!");
    } else if (destaqueMedalha == undefined) {
        res.status(400).send("O destaqueMedalha está undefined!");
    } else if (emocaoDominante == undefined) {
        res.status(400).send("A emocaoDominante está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        avaliacaoModel.cadastrar(idUsuario, idFilme, notaGeral, notaDialogo, notaTrilhaSonora, notaSangue, notaTensao, destaqueMedalha, emocaoDominante)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro da avaliação! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


module.exports = {
    cadastrar
};