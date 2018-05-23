CREATE DATABASE abastecimento CHARACTER SET utf8 COLLATE utf8_general_ci;

CREATE TABLE `combustivel` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `combustivel` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `funcao` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `funcao` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `setor` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `setor` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `funcionario` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `cpf` varchar(14) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `cep` varchar(9) NOT NULL,
  `endereco` varchar(255) NOT NULL,
  `bairro` varchar(100) DEFAULT NULL,
  `municipio` varchar(100) NOT NULL,
  `uf` varchar(2) NOT NULL,
  `data_nascimento` date NOT NULL,
  `contato_principal` varchar(16) NOT NULL,
  `contato_secundario` varchar(16) DEFAULT NULL,
  `observacao` varchar(255) DEFAULT NULL,
  `setor` int(10) unsigned NOT NULL,
  `funcao` int(10) unsigned NOT NULL,
  `situacao` varchar(20) NOT NULL,
  `data_admissao` date NOT NULL,
  `banco` varchar(100) NOT NULL,
  `conta` varchar(100) NOT NULL,
  `agencia` varchar(15) NOT NULL,
  `rg` varchar(16) NOT NULL,
  `data_exp_rg` date NOT NULL,
  `municipio_rg` varchar(100) NOT NULL,
  `org_expedidor_rg` varchar(30) NOT NULL,
  `carteira_prof` varchar(100) DEFAULT NULL,
  `serie` varchar(8) DEFAULT NULL,
  `municipio_carteira` varchar(100) DEFAULT NULL,
  `numero_cnh` varchar(11) DEFAULT NULL,
  `data_cnh` date DEFAULT NULL,
  `municipio_cnh` varchar(100) DEFAULT NULL,
  `categoria` varchar(2) DEFAULT NULL,
  `vencimento_cnh` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `funcionario_setor_FK` (`setor`),
  KEY `funcionario_funcao_FK` (`funcao`),
  CONSTRAINT `funcionario_funcao_FK` FOREIGN KEY (`funcao`) REFERENCES `funcao` (`id`),
  CONSTRAINT `funcionario_setor_FK` FOREIGN KEY (`setor`) REFERENCES `setor` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `noticias` (
  `id_noticia` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) CHARACTER SET latin1 NOT NULL,
  `noticia` text CHARACTER SET latin1 NOT NULL,
  `resumo` varchar(100) CHARACTER SET latin1 DEFAULT NULL,
  `autor` varchar(30) CHARACTER SET latin1 DEFAULT NULL,
  `data_noticia` date DEFAULT NULL,
  PRIMARY KEY (`id_noticia`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;


CREATE TABLE `veiculo_marca` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `marca` varchar(100) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `veiculo_modelo` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `modelo` varchar(100) NOT NULL,
  `marca` int(10) unsigned NOT NULL,
  `esquematica` int(10) unsigned NOT NULL,
  `procedencia` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `veiculo_modelo_veiculo_marca_FK` (`marca`),
  CONSTRAINT `veiculo_modelo_veiculo_marca_FK` FOREIGN KEY (`marca`) REFERENCES `veiculo_marca` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `veiculo` (
  `codigo` int(10) unsigned NOT NULL,
  `placa` varchar(8) NOT NULL,
  `ano_fab` int(10) unsigned NOT NULL,
  `ano_mod` int(10) unsigned DEFAULT NULL,
  `marca` int(10) unsigned NOT NULL,
  `modelo` int(10) unsigned NOT NULL,
  `chassi` varchar(17) DEFAULT NULL,
  `municipio` varchar(100) DEFAULT NULL,
  `cor` varchar(100) NOT NULL,
  `tipo_carga` varchar(100) DEFAULT NULL,
  `combustivel` int(10) unsigned NOT NULL,
  `combustivel_alt` int(10) unsigned DEFAULT NULL,
  `qtde_tanque` int(11) NOT NULL,
  `categoria_cnh` char(1) NOT NULL,
  `dim_pneus` varchar(100) DEFAULT NULL,
  `renavan` varchar(11) NOT NULL,
  `venc_dual` date NOT NULL,
  PRIMARY KEY (`codigo`),
  KEY `veiculo_veiculo_marca_FK` (`marca`),
  KEY `veiculo_veiculo_modelo_FK` (`modelo`),
  KEY `veiculo_combustivel_FK` (`combustivel`),
  KEY `veiculo_combustivel_2_FK` (`combustivel_alt`),
  CONSTRAINT `veiculo_combustivel_2_FK` FOREIGN KEY (`combustivel_alt`) REFERENCES `combustivel` (`id`),
  CONSTRAINT `veiculo_combustivel_FK` FOREIGN KEY (`combustivel`) REFERENCES `combustivel` (`id`),
  CONSTRAINT `veiculo_veiculo_marca_FK` FOREIGN KEY (`marca`) REFERENCES `veiculo_marca` (`id`),
  CONSTRAINT `veiculo_veiculo_modelo_FK` FOREIGN KEY (`modelo`) REFERENCES `veiculo_modelo` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;