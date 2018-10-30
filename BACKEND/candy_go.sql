-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Client :  localhost:3306
-- Généré le :  Mar 30 Octobre 2018 à 17:37
-- Version du serveur :  5.7.24-0ubuntu0.18.04.1
-- Version de PHP :  7.2.10-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `candy_go`
--

-- --------------------------------------------------------

--
-- Structure de la table `adress`
--

CREATE TABLE `adress` (
  `id` int(11) NOT NULL,
  `name` varchar(60) NOT NULL,
  `housenumber` varchar(32) NOT NULL,
  `street` varchar(60) NOT NULL,
  `postcode` varchar(60) NOT NULL,
  `city` varchar(60) NOT NULL,
  `latitude` float(10,6) NOT NULL,
  `longitude` float(10,6) NOT NULL,
  `type` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Contenu de la table `adress`
--

INSERT INTO `adress` (`id`, `name`, `housenumber`, `street`, `postcode`, `city`, `latitude`, `longitude`, `type`) VALUES
(1, 'San', '25', 'Rue Eugène Varlin', '59000', 'Lille', 50.629440, 3.075897, 'maison'),
(2, 'Totoro', '62', 'Rue Colbert', '59000', 'Lille', 50.628738, 3.046504, 'maison'),
(3, 'Ashitaka', '26', 'Place Rihour', '59800', 'Lille', 50.636051, 3.062803, 'maison'),
(4, 'Ponyo', '42', ' Rue Jean Sans Peur', '59800', 'Lille', 50.633568, 3.059886, 'appartement'),
(5, 'Sosuke', '6', 'Rue Jean Sans Peur', '59800', 'Lille', 50.634029, 3.060855, 'appartement'),
(6, 'Fujimoto', '345', 'Rue Léon Gambetta', '59000', 'Lille', 50.626678, 3.048217, 'maison'),
(7, 'Lisa', '87', 'rue Masséna', '59800', 'Lille', 50.631516, 3.055012, 'maison'),
(8, 'Chihiro', '33', 'Rue Colbert', '59800', 'Lille', 50.628880, 3.046782, 'appartement'),
(9, 'Haku', '36', 'Rue d\'Esquermes', '59000', 'Lille', 50.624451, 3.043541, 'maison'),
(10, 'Yubaba', '124', 'Rue Jules Guesde', '59000', 'Lille', 50.621162, 3.051635, 'appartement'),
(11, 'Zeniba', '89', 'Rue Barthélémy Delespaul', '59000', 'Lille', 50.624222, 3.062177, 'appartement'),
(12, 'Kamaji', '24', 'Boulevard Jean-Baptiste Lebas', '59000', 'Lille', 50.627102, 3.068079, 'maison'),
(13, 'Moro', '15', 'Rue du Faisan', '59800', 'Lille', 50.632694, 3.054207, 'maison'),
(14, 'Yakkuru', '18', 'Rue du Marché', '59000', 'Lille', 50.627254, 3.051231, 'maison'),
(15, 'Okkoto', '116', 'Rue de Cambrai', '59000', 'Lille', 50.623993, 3.074907, 'maison'),
(16, 'Sheeta', '84', 'Rue Manuel', '59000', 'Lille', 50.626907, 3.053961, 'maison'),
(17, 'Pazu', '52', 'Rue Racine', '59000', 'Lille', 50.624512, 3.051356, 'appartement'),
(18, 'Muska', '2', 'Rue Louis Dupied', '59800', 'Lille', 50.627148, 3.078105, 'appartement'),
(19, 'Satsuki', '143', 'Boulevard de la Liberté', '59800', 'Lille', 50.632229, 3.061362, 'appartement'),
(20, 'Mei Kusakabé', '3', 'Rue Ernest Deconynck', '59800', 'Lille', 50.632011, 3.055566, 'maison'),
(21, 'chat bus', '254', 'Rue Nationale', '59800', 'Lille', 50.630836, 3.047698, 'maison'),
(22, 'Seita', '247', 'Rue Saint-Sébastien', '59800', 'Lille', 50.647461, 3.060426, 'maison');

-- --------------------------------------------------------

--
-- Structure de la table `inventory`
--

CREATE TABLE `inventory` (
  `id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `qte` int(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Index pour les tables exportées
--

--
-- Index pour la table `adress`
--
ALTER TABLE `adress`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `inventory`
--
ALTER TABLE `inventory`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `adress`
--
ALTER TABLE `adress`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
--
-- AUTO_INCREMENT pour la table `inventory`
--
ALTER TABLE `inventory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
