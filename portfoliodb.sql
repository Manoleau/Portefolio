-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mar. 05 déc. 2023 à 17:39
-- Version du serveur : 8.0.31
-- Version de PHP : 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `portfoliodb`
--

-- --------------------------------------------------------

--
-- Structure de la table `competence`
--

DROP TABLE IF EXISTS `competence`;
CREATE TABLE IF NOT EXISTS `competence` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(64) NOT NULL,
  `image` varchar(64) NOT NULL,
  `niveau` int NOT NULL,
  `type` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `type` (`type`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `competence`
--

INSERT INTO `competence` (`id`, `nom`, `image`, `niveau`, `type`) VALUES
(1, 'Python', 'img/python.png', 3, 1),
(2, 'Java', 'img/java.png', 2, 1),
(3, 'PHP', 'img/php.png', 2, 1),
(4, 'Node.js', 'img/nodejs.png', 2, 1),
(5, 'HTML', 'img/html.png', 3, 2),
(6, 'CSS', 'img/css.png', 1, 2),
(7, 'JavaScript', 'img/js.png', 2, 2),
(8, 'MySQL', 'img/mysql.png', 2, 3),
(9, 'PhpMyAdmin', 'img/phpmyadmin.png', 3, 3),
(10, 'Windows', 'img/windows.png', 3, 4),
(11, 'Linux', 'img/linux.png', 2, 4),
(12, 'Mac OS', 'img/mac.png', 1, 4),
(13, 'Méthode Agile', 'img/agile.png', 2, 6),
(14, 'Git', 'img/git.png', 2, 6),
(15, 'Visual Studio Code', 'img/vscode.png', 3, 5),
(16, 'Suite Jetbrains', 'img/jetbrains.png', 2, 5),
(17, 'C', 'img/C.png', 1, 1),
(18, 'UML', 'img/structure-hierarchique.png', 2, 8),
(19, 'Power AMC', 'img/poweramc.png', 2, 8);

-- --------------------------------------------------------

--
-- Structure de la table `contact`
--

DROP TABLE IF EXISTS `contact`;
CREATE TABLE IF NOT EXISTS `contact` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(32) NOT NULL,
  `image` varchar(32) NOT NULL,
  `lien` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `contact`
--

INSERT INTO `contact` (`id`, `nom`, `image`, `lien`) VALUES
(1, 'Gmail', 'img/gmail.png', 'mailto:emmanuelar.pro@gmail.com'),
(2, 'Linkedin', 'img/linkedin.svg', 'https://www.linkedin.com/in/emmanuel-ardoin-819217251/');

-- --------------------------------------------------------

--
-- Structure de la table `projet`
--

DROP TABLE IF EXISTS `projet`;
CREATE TABLE IF NOT EXISTS `projet` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `ready` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `projet`
--

INSERT INTO `projet` (`id`, `name`, `description`, `image`, `ready`) VALUES
(1, 'EDT IUT', 'Ce projet est un bot discord qui a pour but d\'afficher les emploies du temps des classes et des salles du département informatique avec différentes commandes.', 'https://www.aht.li/3813545/logo_EDTIUT.png', 1),
(2, 'League DLE', 'Ce bot discord est un jeu où il faut deviner le nom des items/champions en fonction de la description ou des images de ces derniers. Il contient également un système de récompenses.', 'https://www.aht.li/3813533/logo_leaguedle.png', 0);

-- --------------------------------------------------------

--
-- Structure de la table `typecompetence`
--

DROP TABLE IF EXISTS `typecompetence`;
CREATE TABLE IF NOT EXISTS `typecompetence` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nomType` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `imageType` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `typecompetence`
--

INSERT INTO `typecompetence` (`id`, `nomType`, `imageType`) VALUES
(1, 'Back-end', 'img/backend.png'),
(2, 'Front-end', 'img/frontend.png'),
(3, 'Base de données', 'img/database.png'),
(4, 'OS', 'img/os.png'),
(6, 'Gestion de projet', 'img/gestion-de-projet.png'),
(5, 'IDE', 'img/ide.png'),
(7, 'Réseaux', 'img/network.png'),
(8, 'Analyse Conception', 'img/analyse.png');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
