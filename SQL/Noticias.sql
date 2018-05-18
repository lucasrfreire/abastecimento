CREATE DATABASE abastecimento CHARACTER SET utf8 COLLATE utf8_general_ci;

CREATE TABLE `noticias` (
  `id_noticia` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  `noticia` text NOT NULL,
  `resumo` varchar(100) DEFAULT NULL,
  `autor` varchar(30) DEFAULT NULL,
  `data_noticia` date DEFAULT NULL,
  PRIMARY KEY (`id_noticia`)
);
