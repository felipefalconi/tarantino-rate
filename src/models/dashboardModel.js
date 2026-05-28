var database = require("../database/config")

function buscarNivelFa() {
    var instrucao = `
        SELECT ROUND((COUNT(DISTINCT fkFilme) / 10) * 100, 0) AS nivel_de_fa 
        FROM avaliacao;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarFilmeMaiorNota() {
    var instrucao = `
        SELECT f.titulo, ROUND(AVG(a.notaGeral), 1) AS media_geral 
        FROM avaliacao a
        JOIN filme f ON a.fkFilme = f.idFilme
        GROUP BY f.idFilme, f.titulo
        ORDER BY media_geral DESC 
        LIMIT 1;
    `;
    return database.executar(instrucao);
}

function buscarEmocaoPredominante() {
    var instrucao = `
        SELECT emocaoDominante, COUNT(emocaoDominante) AS quantidade 
        FROM avaliacao
        GROUP BY emocaoDominante
        ORDER BY quantidade DESC
        LIMIT 1;
    `;
    return database.executar(instrucao);
}

function buscarQtdAvaliacoes() {
    var instrucao = `SELECT COUNT(idAvaliacao) AS total_avaliacoes FROM avaliacao;`;
    return database.executar(instrucao);
}

function buscarFichaTecnica() {
    var instrucao = `
        SELECT 
            ROUND(AVG(nivelSangue), 1) AS media_sangue,
            ROUND(AVG(nivelTensao), 1) AS media_tensao,
            ROUND(AVG(notaDialogo), 1) AS media_dialogo,
            ROUND(AVG(notaTrilhaSonora), 1) AS media_trilha
        FROM avaliacao;
    `;
    return database.executar(instrucao);
}

function buscarFichaTecnicaPorFilme(idFilme) {
    var instrucao = `
        SELECT 
            ROUND(AVG(nivelSangue), 1) AS media_sangue,
            ROUND(AVG(nivelTensao), 1) AS media_tensao,
            ROUND(AVG(notaDialogo), 1) AS media_dialogo,
            ROUND(AVG(notaTrilhaSonora), 1) AS media_trilha
        FROM avaliacao
        WHERE fkFilme = ${idFilme};
    `;
    return database.executar(instrucao);
}

function buscarDestaqueFilme() {
    var instrucao = `
        SELECT destaqueMedalha, COUNT(destaqueMedalha) AS total_votos
        FROM avaliacao
        GROUP BY destaqueMedalha;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function buscarEmocoesFrequentes() {
    var instrucao = `
        SELECT emocaoDominante, COUNT(emocaoDominante) AS total_votos
        FROM avaliacao
        GROUP BY emocaoDominante;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarComparativo(idUsuario) {
    var instrucao = `
        SELECT 
            f.titulo, 
            ROUND(AVG(a.notaGeral), 1) AS media_comunidade,
            MAX(CASE WHEN a.fkUsuario = ${idUsuario} THEN a.notaGeral ELSE 0 END) AS nota_usuario
        FROM avaliacao a
        JOIN filme f ON a.fkFilme = f.idFilme
        GROUP BY f.idFilme, f.titulo;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarEmocoesFrequentes() {
    var instrucao = `
        SELECT emocaoDominante, COUNT(emocaoDominante) AS total_votos
        FROM avaliacao
        GROUP BY emocaoDominante;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    buscarNivelFa,
    buscarFichaTecnica,
    buscarFilmeMaiorNota,
    buscarEmocaoPredominante,
    buscarQtdAvaliacoes,
    buscarDestaqueFilme,
    buscarEmocoesFrequentes,
    buscarComparativo,
    buscarFichaTecnicaPorFilme
};