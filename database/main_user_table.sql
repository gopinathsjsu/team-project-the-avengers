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
-- Table structure for table `user_table`
--

DROP TABLE IF EXISTS `user_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_table` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP,
  `phone` char(15) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `user_type` varchar(45) DEFAULT 'member',
  `user_points` int DEFAULT '0',
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=74 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_table`
--

LOCK TABLES `user_table` WRITE;
/*!40000 ALTER TABLE `user_table` DISABLE KEYS */;
INSERT INTO `user_table` VALUES (1,'guest@email.com','pass','guest','user','2022-04-09 10:42:10','+1 789-876-4540','2000-11-23','member',51455),(2,'admin@email.com','admin','admin','user','2022-04-09 10:42:10','+1 980-123-8978','1995-02-22','admin',0),(3,'member@email.com','member','member','user','2022-04-09 10:42:10','+1 874-091-2347','1998-09-17','member',0),(5,'faiz@faiz.com','somesecretpass','Faizali','Mulla','2022-04-18 20:36:24','3243565',NULL,'',0),(23,'hjsacnj','sackjsa','sacd','$ssac','2022-04-29 06:58:29','989786',NULL,'member',0),(26,'superman@email.com','$2b$10$zsTmP5/AxJBjDuVaf4Z93uXJvxwWz6HGaDK1DU','super','man','2022-04-29 07:19:55','+19876543678',NULL,'member',0),(27,'starwars@email.com','$2b$10$1DiuV1.xKHtIBxFODwukTOvPOHINK0gSf962ly','star','wars','2022-04-29 07:55:50','+12378987908',NULL,'member',0),(35,'undefined','undefined','undefined','undefined','2022-04-29 23:36:15','undefined',NULL,'member',0),(38,'spiderman@email.com','$2b$10$6EHGXQjLB7bSBZxYS5uxWenO5uBhjQaR193gkuJqNyRCXQpytuvqu','spider','man','2022-04-30 04:22:59','+18789876567',NULL,'member',0),(39,'visva@email.com','$2b$10$Lg6VCSryHLEsRTAdJZWkveRS6PzQouEISdCr38zJjgzHY.veO1HUW','visva','suthar','2022-04-30 04:34:45','+19876789098',NULL,'member',20919),(51,'faizalihidayatulla.mulla@sjsu.edu','$2b$10$laTYlONro05.tPn48OjeteDt3uuCatse/WtIMrc9IU4LZiYj32Fse','Faizali','Mulla','2022-05-01 18:52:58','+14085496278',NULL,'member',2312),(56,'visva@test.com','$2b$10$bdm9rIs9IVTY3loLT9f7Ku0IZjYTA3Hs8jFgIBu1OrXleZALkSjOe','visva','test','2022-05-03 01:30:16','+19999999999',NULL,'member',1175),(58,'spartans@email.com','$2b$10$ZTQ0kKb4Gtipgano1vH8c.H/stVEzRitsQKz8j8YoI150C9FK.JmW','go','spartans','2022-05-03 06:14:29','+19999999999',NULL,'member',980),(63,'admin@mail.com','$2b$10$3wgcxcQrwENI1jmqNqqyu.nA7C1DN8mQ6QD3qtz5hn64u5FP57FD6','admin','user','2022-05-08 06:29:24','+19999999999',NULL,'admin',230),(64,'faizalimulla@gmail.com','$2b$10$7FQjLt2Cn.hyu4I87tpSZO2wS27FvAQCK7RNqMSbq6mrKw.AHpuIC','Faizali','Mulla','2022-05-08 23:47:48','+11111111111',NULL,'member',1736),(65,'user@test.com','$2b$10$TsIFhJuBzcV.skKPVwVzy.G1D1oUjEtd5NTaFkB.jZB83TV4jNzTa','Test','User','2022-05-09 02:17:46','+1234567890',NULL,'member',79),(66,'admin@test.com','$2b$10$H8DLmbrM3Yaw0L.3Fm.WWedfKy0.Rw8UmGud9hkHQbcXjUXVK/2ke','Hotel','Admin','2022-05-09 03:34:53','+1234567890',NULL,'admin',-422),(67,'amy@gmail.com','$2b$10$4HWFmqEhS4nN8qYcc77h8erYjgh6x2Pd19xnWI2x68uuBsT/9mtV2','Amy','Phan','2022-05-09 04:12:28','+1234567890',NULL,'member',17656),(68,'jamessmith@test.com','$2b$10$e3Kme5ZppjaoItrJAb4JuOFpGJ.fsip8CwU2cVASXvjLO17cCQLuG','James','Smith','2022-05-10 06:16:30','+1234567890',NULL,'member',2790),(70,'ironman@test.com','$2b$10$1g81vXrfYmrR1zzZh5WD7.DBHNVEPjBRWkRAzavO4Egl2WzFP26DW','Iron','Man','2022-05-11 10:23:05','+1234567890',NULL,'member',2),(71,'james@gmail.com','$2b$10$s3tsq1/fgkzTQMadyHKKqeq9bPdIgvHB86atyas/mfzro/8UVj/JK','James','Smith','2022-05-11 11:25:37','+1234567890',NULL,'member',1),(72,'poppins@gmail.com','$2b$10$9K/k4HczLPe9ZGNf.8xOCeVSs1lQV/JZvbQ0BBOudN4XYK0uTnIJO','Mary','Poppins','2022-05-11 23:36:37','+1234567890',NULL,'member',1152),(73,'burger@test.com','$2b$10$FvJ6y8ZcKnIkUuhT39P7eeIXWieycZWq7K.ONzqzkWu4oKeyWXMa6','Burger','King','2022-05-12 00:53:28','+1234567890',NULL,'member',264);
/*!40000 ALTER TABLE `user_table` ENABLE KEYS */;
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

-- Dump completed on 2022-05-11 22:35:56
