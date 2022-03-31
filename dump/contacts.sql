-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 31-Mar-2022 às 17:29
-- Versão do servidor: 10.4.22-MariaDB
-- versão do PHP: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `contacts`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `contact_list`
--

CREATE TABLE `contact_list` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `contact_list`
--

INSERT INTO `contact_list` (`id`, `name`, `email`, `phone`, `address`) VALUES
(1, 'Maria', 'maria3@gmail.com', '55 (21) 9435-34539', 'Travessa das Americas 4380'),
(36, 'Rosane', 'rose@gmail.com', '55(21)9590-3412', 'Avenida dos Anjos'),
(37, 'Arielly', 'arielle@gmail.com', '55(21)9590-3412', 'Avenida dos Anjos 3'),
(43, 'Maroa', 'mfdgfd@gmail.com', '55(21)9590-3412', 'Travessa do teatro'),
(50, 'Daniel', 'dani@email.com', '55(21)9590-3412', 'Avenida da Consolação'),
(56, 'Cristina', 'cris@gmail.com', '55(21)9590-3412', 'Avenida da Consolação');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `contact_list`
--
ALTER TABLE `contact_list`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `contact_list`
--
ALTER TABLE `contact_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
