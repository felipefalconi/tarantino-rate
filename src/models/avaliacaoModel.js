var database = require("../database/config")

function cadastrar(idUsuario, idFilme, notaGeral, notaDialogo, notaTrilhaSonora, notaSangue, notaTensao, destaqueMedalha, emocaoDominante) {
    var instrucao = `
        INSERT INTO Avaliacao (fkUsuario, fkFilme, notaGeral, nivelSangue, nivelTensao, notaDialogo, notaTrilhaSonora, destaqueMedalha, emocaoDominante) 
        VALUES (${idUsuario}, ${idFilme}, ${notaGeral}, ${notaSangue}, ${notaTensao}, ${notaDialogo}, ${notaTrilhaSonora}, '${destaqueMedalha}', '${emocaoDominante}' );
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar
};