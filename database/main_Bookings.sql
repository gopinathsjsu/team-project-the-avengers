CREATE DATABASE  IF NOT EXISTS `main` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `main`;
-- MySQL dump 10.13  Distrib 8.0.28, for macos11 (x86_64)
--
-- Host: database-1.cdhjvbwqbfsh.us-east-1.rds.amazonaws.com    Database: main
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
-- Table structure for table `Bookings`
--

DROP TABLE IF EXISTS `Bookings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Bookings` (
  `id` int NOT NULL AUTO_INCREMENT,
  `room_no` int NOT NULL,
  `room_type` varchar(30) NOT NULL,
  `location` varchar(30) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `user_id` int NOT NULL,
  `price` double NOT NULL,
  `Amenities` varchar(200) DEFAULT NULL,
  `guests` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=151 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Bookings`
--

LOCK TABLES `Bookings` WRITE;
/*!40000 ALTER TABLE `Bookings` DISABLE KEYS */;
INSERT INTO `Bookings` VALUES (16,1,'King_Suite','San Jose','2022-06-19','2022-06-21',10,1000,'No Amenities',1),(17,1,'King_Suite','San Jose','2022-06-19','2022-06-21',10,1000,'No Amenities',1),(18,1,'King_Suite','San Jose','2022-06-19','2022-06-21',10,1000,'No Amenities',1),(19,1,'King_Suite','San Jose','2022-06-19','2022-06-21',10,1000,'No Amenities',1),(20,1,'King_Suite','San Jose','2022-06-19','2022-06-21',10,1000,'Daily Continental Breakfast, Access to Fitness Room',2),(21,1,'King_Suite','San Jose','2022-06-19','2022-06-21',10,1000,'Daily Continental Breakfast, Access to Fitness Room',2),(22,1,'King_Suite','San Jose','2022-06-19','2022-06-21',10,1000,'Daily Continental Breakfast, Access to Fitness Room',2),(24,1,'King_Suite','San Jose','2022-06-19','2022-06-21',10,1000,'Daily Continental Breakfast, Access to Fitness Room',2),(25,1,'King_Suite','San Jose','2022-06-19','2022-06-21',10,1000,'Daily Continental Breakfast, Access to Fitness Room',2),(35,1,'Queen_Suite','San Jose','2022-05-30','2022-06-05',1,5551.5,'Daily Parking, All Meals Included',1),(38,1,'Junior_Suite','San Jose','2022-05-29','2022-05-30',12,1000,'No Ameneties',NULL),(45,1,'King_Suite','San Jose','2022-06-08','2022-06-11',48,3378,'No Amenities',1),(52,1,'King_Suite','San Diego','2022-05-10','2022-05-13',39,2267,'Daily Continental Breakfast',1),(74,1,'Queen_Suite','San Jose','2022-05-08','2022-05-11',65,780,'No Amenities',2),(79,2,'Junior_Suite','San Jose','2022-05-08','2022-05-14',65,215,'Daily Parking',1),(85,1,'Queen_Suite','New York','2022-05-19','2022-05-23',67,2665,'Access to Swimming Pool/Jacuzzi, Daily Parking',1),(86,3,'Junior_Suite','San Jose','2022-05-11','2022-05-13',56,200,'No Amenities',1),(87,1,'King_Suite','San Deigo       ','2022-05-10','2022-05-14',56,585,'Access to Swimming Pool/Jacuzzi',1),(88,2,'Queen_Suite','San Jose','2022-05-11','2022-05-13',4,540,'Daily Continental Breakfast',1),(89,1,'Junior_Suite','Chicago','2022-05-11','2022-05-13',4,255,'All Meals Included',1),(102,1,'King_Suite','Austin','2022-05-10','2022-05-11',56,1685,'Daily Parking',2),(105,1,'Junior_Suite','San Deigo       ','2022-05-12','2022-05-14',68,615,'Daily Parking',1),(108,1,'Junior_Suite','Philadelphia','2022-05-13','2022-05-15',65,635,'Daily Continental Breakfast, Access to Fitness Room, Access to Swimming Pool/Jacuzzi, Daily Parking, All Meals Included',2),(111,1,'Queen_Suite','New York','2022-05-12','2022-05-14',65,1130,'Access to Fitness Room, Access to Swimming Pool/Jacuzzi, Daily Parking',1),(112,1,'Junior_Suite','New York','2022-06-20','2022-06-24',65,500,'No Amenities',0),(123,1,'Junior_Suite','Houston','2022-05-13','2022-05-15',64,625,'Access to Fitness Room',1),(125,2,'Junior_Suite','Philadelphia','2022-05-12','2022-05-14',72,465,'Access to Fitness Room, Access to Swimming Pool/Jacuzzi, Daily Parking',1),(127,3,'Junior_Suite','Philadelphia','2022-05-12','2022-05-14',72,315,'Daily Parking',0),(128,1,'Junior_Suite','New York','2022-06-02','2022-06-04',72,300,'No Amenities',0),(129,1,'Junior_Suite','New York','2022-07-14','2022-07-16',65,3915,'Daily Parking',12),(130,1,'King_Suite','San Jose','2022-07-30','2022-07-31',63,465,'No Ameneties',NULL),(131,1,'King_Suite','San Jose','2022-09-01','2022-09-03',63,315,'No Ameneties',NULL),(136,1,'Junior_Suite','Houston','2022-05-19','2022-05-21',73,330,'Daily Continental Breakfast, Daily Parking',0),(137,1,'Queen_Suite','New York','2022-05-26','2022-05-28',73,825,'Daily Parking',0),(138,1,'King_Suite','San Jose','2022-06-01','2022-06-03',63,465,'No Ameneties',NULL),(139,10,'Junior_Suite','San Jose','2022-05-12','2022-05-14',73,500,'No Amenities',0),(140,1,'King_Suite','San Jose','2022-05-18','2022-05-21',63,315,'No Ameneties',NULL),(141,10,'Junior_Suite','San Jose','2022-05-12','2022-05-14',73,500,'No Amenities',0),(142,10,'Junior_Suite','San Jose','2022-05-12','2022-05-14',73,500,'No Amenities',0),(143,10,'Junior_Suite','San Jose','2022-05-12','2022-05-14',73,500,'No Amenities',0),(144,12,'King_Suite','San Jose','2022-08-01','2022-08-03',63,500,'No Ameneties',NULL),(145,1,'Queen_Deluxe','Seattle','2022-05-29','2022-05-31',56,665,'All Meals Included',1),(146,2,'Queen_Deluxe','Seattle','2022-05-29','2022-05-31',39,665,'All Meals Included',1),(147,1,'Junior_Suite','Chicago','2022-05-29','2022-05-31',39,655,'All Meals Included',1),(148,2,'Queen_Suite','San Jose','2022-05-28','2022-05-30',39,4720,'No Amenities',1),(149,1,'King_Suite','San Jose','2022-08-13','2022-08-15',65,465,'No Amenities',1),(150,1,'King_Suite','San Jose','2022-08-13','2022-08-15',65,315,'No Amenities',1);
/*!40000 ALTER TABLE `Bookings` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-11 22:35:59
