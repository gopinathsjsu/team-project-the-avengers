CREATE DATABASE  IF NOT EXISTS `hotel` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `hotel`;
-- MySQL dump 10.13  Distrib 8.0.28, for macos11 (x86_64)
--
-- Host: localhost    Database: hotel
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

--
-- Dumping data for table `amenities_table`
--

LOCK TABLES `amenities_table` WRITE;
/*!40000 ALTER TABLE `amenities_table` DISABLE KEYS */;
INSERT INTO `amenities_table` VALUES (1,'No Amenities','no amenities included',0),(2,'Daily Continental Breakfast','daily breakfast included',15),(3,'Access to Fitness Room','full access to fitness room',32),(4,'Access to Swimming Pool/Jacuzzi','full access to jacuzzi and swimming pool',20),(5,'Daily Parking','parking per day',5),(6,'All meals included(Breakfast, Lunch, Dinner)','all meals - breakfast, lunch and dinner included',55);
/*!40000 ALTER TABLE `amenities_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `bookings_table`
--

LOCK TABLES `bookings_table` WRITE;
/*!40000 ALTER TABLE `bookings_table` DISABLE KEYS */;
/*!40000 ALTER TABLE `bookings_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `country_table`
--

LOCK TABLES `country_table` WRITE;
/*!40000 ALTER TABLE `country_table` DISABLE KEYS */;
INSERT INTO `country_table` VALUES (1,'USA',NULL),(2,'UK',NULL),(3,'India',NULL),(4,'Egypt',NULL);
/*!40000 ALTER TABLE `country_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `hotel_table`
--

LOCK TABLES `hotel_table` WRITE;
/*!40000 ALTER TABLE `hotel_table` DISABLE KEYS */;
INSERT INTO `hotel_table` VALUES (1,NULL,NULL,'San Jose','USA',NULL,NULL,NULL,NULL,NULL),(2,NULL,NULL,'Seattle','USA',NULL,NULL,NULL,NULL,NULL),(3,NULL,NULL,'New York','USA',NULL,NULL,NULL,NULL,NULL),(4,NULL,NULL,'Denver','USA',NULL,NULL,NULL,NULL,NULL),(5,NULL,NULL,'Orlando','USA',NULL,NULL,NULL,NULL,NULL),(6,NULL,NULL,'Austin','USA',NULL,NULL,NULL,NULL,NULL),(7,NULL,NULL,'London','UK',NULL,NULL,NULL,NULL,NULL),(8,NULL,NULL,'Liverpool','UK',NULL,NULL,NULL,NULL,NULL),(9,NULL,NULL,'Bristol','UK',NULL,NULL,NULL,NULL,NULL),(10,NULL,NULL,'Cairo','Egypt',NULL,NULL,NULL,NULL,NULL),(11,NULL,NULL,'Giza','Egypt',NULL,NULL,NULL,NULL,NULL),(12,NULL,NULL,'Delhi','India',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `hotel_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `rooms_table`
--

LOCK TABLES `rooms_table` WRITE;
/*!40000 ALTER TABLE `rooms_table` DISABLE KEYS */;
INSERT INTO `rooms_table` VALUES (1,'King Suite','1 King bed',1,289,274),(2,'Queen Suite','1 Queen bed',1,269,254),(3,'Junior Suite','2 Double beds',2,246,234),(4,'Queen Deluxe','2 Queen beds',2,259,244);
/*!40000 ALTER TABLE `rooms_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `user_table`
--

LOCK TABLES `user_table` WRITE;
/*!40000 ALTER TABLE `user_table` DISABLE KEYS */;
INSERT INTO `user_table` VALUES (1,'test','test@email.com','pass','test','test','2022-04-09 10:42:10','+1 789-876-4540','2000-11-23'),(2,'admin','admin@email.com','admin','admin','user','2022-04-09 10:42:10','+1 980-123-8978','1995-02-22'),(3,'testuser','testuser@email.com','testuser','test','user','2022-04-09 10:42:10','+1 874-091-2347','1998-09-17');
/*!40000 ALTER TABLE `user_table` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-16  9:16:01
