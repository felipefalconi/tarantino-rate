var dashboardModel = require("../models/dashboardModel")


function buscarNivelFa(req, res) {

    dashboardModel.buscarNivelFa()
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function buscarFilmeMaiorNota(req, res) {

    dashboardModel.buscarFilmeMaiorNota()
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function buscarEmocaoPredominante(req, res) {

    dashboardModel.buscarEmocaoPredominante()
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function buscarQtdAvaliacoes(req, res) {

    dashboardModel.buscarQtdAvaliacoes()
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function buscarFichaTecnica(req, res) {

    dashboardModel.buscarFichaTecnica()
        .then(function (resultado) {
            res.json(resultado);
        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });

}

function buscarFichaTecnicaPorFilme(req, res) {
    var idFilme = req.params.idFilme;

    dashboardModel.buscarFichaTecnicaPorFilme(idFilme)
        .then(function (resultado) {
            res.json(resultado);
        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function buscarDestaqueFilme(req, res) {

    dashboardModel.buscarDestaqueFilme()
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function buscarEmocoesFrequentes(req, res) {

    dashboardModel.buscarEmocoesFrequentes()
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function buscarComparativo(req, res) {

    var idUsuario = req.params.idUsuario;

    if (idUsuario == undefined) {
        res.status(400).send("O ID do usuário está undefined!");
    } else {
        dashboardModel.buscarComparativo(idUsuario)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}



module.exports = {
    buscarNivelFa,
    buscarFichaTecnica,
    buscarFilmeMaiorNota,
    buscarEmocaoPredominante,
    buscarQtdAvaliacoes,
    buscarDestaqueFilme,
    buscarComparativo,
    buscarEmocoesFrequentes,
    buscarFichaTecnicaPorFilme
};