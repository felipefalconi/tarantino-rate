var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.post("/cadastrar", function (req, res) {
    dashboardController.cadastrar(req, res);
})

router.get("/kpi/nivel-fa", function (req, res) {
    dashboardController.buscarNivelFa(req, res);
})

router.get("/kpi/maior-nota", function (req, res) {
    dashboardController.buscarFilmeMaiorNota(req, res);
})

router.get("/kpi/emocao-predominante", function (req, res) {
    dashboardController.buscarEmocaoPredominante(req, res);
})

router.get("/kpi/qtd-avaliacoes", function (req, res) {
    dashboardController.buscarQtdAvaliacoes(req, res);
})

router.get("/grafico/ficha-tecnica", function (req, res) {
    dashboardController.buscarFichaTecnica(req, res);
});

router.get("/grafico/ficha-tecnica/:idFilme", function (req, res) {
    dashboardController.buscarFichaTecnicaPorFilme(req, res);
})

router.get("/grafico/veredito-tecnico", function (req, res) {
    dashboardController.buscarDestaqueFilme(req, res);
})

router.get("/grafico/emocoes", function (req, res) {
    dashboardController.buscarEmocoesFrequentes(req, res);
})

router.get("/grafico/comparativo/:idUsuario", function (req, res) {
    dashboardController.buscarComparativo(req, res);
});



module.exports = router;