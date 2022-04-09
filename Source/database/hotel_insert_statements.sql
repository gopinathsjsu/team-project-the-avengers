INSERT INTO `hotel`.`signup`
(`username`,
`email`,
`password`,
`first_name`,
`last_name`,
`userid`,
`create_time`)
VALUES
('test', 'test@email.com','pass', 'test','test',1,CURRENT_TIMESTAMP),
('admin','admin@email.com','admin','admin','user',2,CURRENT_TIMESTAMP),
('testuser','testuser@email.com', 'testuser','test','user',3,CURRENT_TIMESTAMP);

INSERT INTO `hotel`.`login`
(`userid`,
`username`,
`password`)
VALUES
(1,'test','pass'),
(2,'admin','admin'),(3,'testuser','testuser');


INSERT INTO `hotel`.`hotel`
(`hotelid`,
`location`)
VALUES
(1,'San Jose'),(2,'Seattle'),(3,'New York'),(4,'Denver'),(5,'Orlando'),(6,'Austin');

INSERT INTO `hotel`.`bedroom`
(`bedroom_id`,
`bedroom_type`,
`number_of_beds`,
`room_description`,
`room_rate_guests`,
`room_rate_members`)
VALUES
(1,	'King Suite',	1,	'1 King bed',	289,	274),
(2	,'Queen Suite',	1, '1 Queen bed',	269,	254),
(3,	'Junior Suite',	2,	'2 Double beds',	246,	234),
(4,	'Queen Deluxe',	2,	'2 Queen beds',	259,	244);

INSERT INTO `hotel`.`amenities`
(`amenity_id`,
`amenity`,
`amenity_price`)
VALUES
(1,'Daily Continental Breakfast',15),
(2, 'Access to Fitness Room',32),
(3, 'Access to Swimming Pool/Jacuzzi',20),
(4, 'Daily Parking', 5),
(5, 'All meals included(Breakfast, Lunch, Dinner)',55);
