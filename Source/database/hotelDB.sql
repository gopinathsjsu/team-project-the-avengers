CREATE DATABASE  IF NOT EXISTS `hotel` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `hotel`;
-- MySQL dump 10.13  Distrib 8.0.28, for macos11 (x86_64)
--
-- Host: database-1.ca9ddimducmq.us-east-2.rds.amazonaws.com    Database: hotel
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '';

--
-- Table structure for table `amenities_table`
--

DROP TABLE IF EXISTS `amenities_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `amenities_table` (
  `amenity_id` int NOT NULL AUTO_INCREMENT,
  `amenity_name` varchar(45) DEFAULT NULL,
  `amenity_description` varchar(150) DEFAULT NULL,
  `amenity_price` float DEFAULT NULL,
  PRIMARY KEY (`amenity_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `bookings_table`
--

DROP TABLE IF EXISTS `bookings_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bookings_table` (
  `bookings_id` int NOT NULL AUTO_INCREMENT,
  `timestamp` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` int NOT NULL,
  `hotel_id` int DEFAULT NULL,
  `room_id` int DEFAULT NULL,
  `amenity_id` int DEFAULT NULL,
  `room_type` varchar(45) DEFAULT NULL,
  `checkInDate` date DEFAULT NULL,
  `checkOutDate` date DEFAULT NULL,
  `totalPrice` float DEFAULT NULL,
  PRIMARY KEY (`bookings_id`),
  KEY `amenity_id_idx` (`amenity_id`),
  KEY `hotel_id_idx` (`hotel_id`),
  KEY `room_id_idx` (`room_id`),
  KEY `user_id_idx` (`user_id`),
  CONSTRAINT `amenity_id_fk` FOREIGN KEY (`amenity_id`) REFERENCES `amenities_table` (`amenity_id`),
  CONSTRAINT `hotel_id_fk` FOREIGN KEY (`hotel_id`) REFERENCES `hotel_table` (`hotel_id`),
  CONSTRAINT `room_id_fk` FOREIGN KEY (`room_id`) REFERENCES `rooms_table` (`room_id`),
  CONSTRAINT `user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user_table` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `country_table`
--

DROP TABLE IF EXISTS `country_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `country_table` (
  `country_id` int NOT NULL AUTO_INCREMENT,
  `country_name` varchar(45) NOT NULL,
  `tax` float DEFAULT NULL,
  PRIMARY KEY (`country_id`),
  KEY `country_name_idx` (`country_name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `dynamic_pricing`
--

DROP TABLE IF EXISTS `dynamic_pricing`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dynamic_pricing` (
  `dynamic_pricing_id` int NOT NULL AUTO_INCREMENT,
  `rate_type` varchar(45) NOT NULL,
  `rate_details` varchar(45) NOT NULL,
  `rate_multiplier` float NOT NULL,
  PRIMARY KEY (`dynamic_pricing_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `hotel_table`
--

DROP TABLE IF EXISTS `hotel_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hotel_table` (
  `hotel_id` int NOT NULL AUTO_INCREMENT,
  `hotel_name` varchar(100) DEFAULT NULL,
  `address` varchar(150) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `country_name` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `costMultiple` float DEFAULT NULL,
  `listOfRooms` varchar(45) DEFAULT NULL,
  `mediaDirectory` varchar(45) DEFAULT NULL,
   `room_id` int DEFAULT NULL,
  PRIMARY KEY (`hotel_id`),
  KEY `country_name_idx` (`country_name`),
  KEY `room_id_idx` (`room_id`),
  CONSTRAINT `country_name` FOREIGN KEY (`country_name`) REFERENCES `country_table` (`country_name`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `rooms_table`
--

DROP TABLE IF EXISTS `rooms_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rooms_table` (
  `room_id` int NOT NULL AUTO_INCREMENT,
  `room_name` varchar(45) DEFAULT NULL,
  `room_description` varchar(45) DEFAULT NULL,
  `number_of_beds` int DEFAULT NULL,
  `room_rate_guests` float DEFAULT NULL,
  `room_rate_members` float DEFAULT NULL,
  PRIMARY KEY (`room_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `user_table`
--

DROP TABLE IF EXISTS `user_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_table` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP,
  `phone` char(15) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `user_type` varchar(45) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-16  9:13:19
