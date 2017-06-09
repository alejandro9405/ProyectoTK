-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-06-2017 a las 05:11:19
-- Versión del servidor: 10.1.21-MariaDB
-- Versión de PHP: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ruf`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumnos`
--

CREATE TABLE `alumnos` (
  `id` int(10) NOT NULL,
  `aPaterno` varchar(25) COLLATE utf8_spanish_ci NOT NULL,
  `aMaterno` varchar(25) COLLATE utf8_spanish_ci NOT NULL,
  `nombre` varchar(25) COLLATE utf8_spanish_ci NOT NULL,
  `sexo` varchar(25) COLLATE utf8_spanish_ci NOT NULL,
  `fNac` varchar(25) COLLATE utf8_spanish_ci NOT NULL,
  `curp` varchar(25) COLLATE utf8_spanish_ci NOT NULL,
  `domicilio` varchar(25) COLLATE utf8_spanish_ci NOT NULL,
  `colonia` varchar(25) COLLATE utf8_spanish_ci NOT NULL,
  `ciudad` varchar(25) COLLATE utf8_spanish_ci NOT NULL,
  `estado` varchar(25) COLLATE utf8_spanish_ci NOT NULL,
  `cp` varchar(25) COLLATE utf8_spanish_ci NOT NULL,
  `tel` varchar(25) COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(25) COLLATE utf8_spanish_ci NOT NULL,
  `rfc` varchar(25) COLLATE utf8_spanish_ci NOT NULL,
  `escolaridad` varchar(25) COLLATE utf8_spanish_ci NOT NULL,
  `tRegistro` varchar(25) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `alumnos`
--

INSERT INTO `alumnos` (`id`, `aPaterno`, `aMaterno`, `nombre`, `sexo`, `fNac`, `curp`, `domicilio`, `colonia`, `ciudad`, `estado`, `cp`, `tel`, `email`, `rfc`, `escolaridad`, `tRegistro`) VALUES
(0, 'martinez', 'tec', 'alejandro', 'r', 'r', 'r', 'r', 'solidaridad', 'campeche', 'r', 'r', 'r', 'r', 'r', 'r', 'r');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
