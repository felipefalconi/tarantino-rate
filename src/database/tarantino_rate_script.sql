CREATE DATABASE tarantino_rate;
USE tarantino_rate;

CREATE TABLE Usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100),
username VARCHAR(45),
email VARCHAR(100),
senha VARCHAR(50)
);

CREATE TABLE Filme (
idFilme INT PRIMARY KEY AUTO_INCREMENT,
titulo VARCHAR(100),
dtLancamento DATE,
duracaoMin INT,
notaImdb DECIMAL(3,1),
bilheteria DECIMAL(15,2),
atorDestaque VARCHAR(100)
);


CREATE TABLE Avaliacao (
    idAvaliacao INT PRIMARY KEY AUTO_INCREMENT,
    fkUsuario INT,
    fkFilme INT,
	notaGeral INT,
    nivelSangue INT,
    nivelTensao INT,
    notaDialogo INT,
    notaTrilhaSonora INT,
    emocaoDominante VARCHAR(50),
    destaqueMedalha VARCHAR(50),
    FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario),
    FOREIGN KEY (fkFilme) REFERENCES Filme(idFilme)
);

CREATE TABLE PontuacaoQuiz (
    idPontuacao INT PRIMARY KEY AUTO_INCREMENT,
    fkUsuario INT,
    fkFilme INT,
    qtdAcertos INT,         
    dataHora DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario),
    FOREIGN KEY (fkFilme) REFERENCES Filme(idFilme)
);

ALTER TABLE Usuario ADD COLUMN fkFilmeFavorito INT;

ALTER TABLE Usuario ADD CONSTRAINT fk_filme_favorito 
FOREIGN KEY (fkFilmeFavorito) REFERENCES Filme(idFilme);


INSERT INTO Filme (titulo, dtLancamento, duracaoMin, notaImdb, bilheteria, atorDestaque) VALUES
('Cães de Aluguel', '1992-10-23', 99, 8.3, 2832000.00, 'Harvey Keitel'),
('Pulp Fiction', '1994-10-14', 154, 8.8, 213928000.00, 'John Travolta'),
('Jackie Brown', '1997-12-25', 154, 7.5, 74727000.00, 'Samuel L. Jackson'),
('Kill Bill: Vol. 1', '2003-10-10', 111, 8.2, 180949000.00, 'Uma Thurman'),
('Kill Bill: Vol. 2', '2004-04-16', 137, 8.0, 151590000.00, 'Uma Thurman'),
('À Prova de Morte', '2007-04-06', 113, 7.0, 25422000.00, 'Kurt Russell'),
('Bastardos Inglórios', '2009-08-21', 153, 8.4, 321455000.00, 'Christoph Waltz'),
('Django Livre', '2012-12-25', 165, 8.5, 425368000.00, 'Jamie Foxx'),
('Os Oito Odiados', '2015-12-25', 168, 7.8, 155760000.00, 'Samuel L. Jackson'),
('Era Uma Vez em... Hollywood', '2019-07-26', 161, 7.6, 373358000.00, 'Leonardo DiCaprio');