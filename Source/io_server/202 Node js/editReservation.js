const config = require('mysql2/promise');

exports.editReservation = async (req, res) => {
  const con = await config.createConnection({
    host: "database-1.cdhjvbwqbfsh.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "password"
  });

  const checkIn = new Date(req.body.checkIn);
  const today = new Date();
  if (checkIn <= today) {
    return res.status(400).send({message: 'Reservations can not be changed on the day of or after check-in date.'});
  }

  const addedAmenities = req.body.addedAmenities;
  const roomType = req.body.roomType;
  const addedGuests = req.body.addedGuests;
  const oldPrice = req.body.oldPrice;
  // console.log('Added guests: ' + addedGuests);
  // console.log('Old price: ' + oldPrice);

  var additionalPrice = 0;

  // calculate cost for added amenities
  for (var i = 0; i < addedAmenities.length; i++) {
    var amenityId = addedAmenities[i];
    await con.execute(`SELECT amenity_price FROM main.Amenities WHERE amenity_id = ${amenityId}`)
      .then((results) => {
        // console.log('Amenity price: ' + results[0][0].amenity_price);
        additionalPrice += results[0][0].amenity_price;
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).send({message: 'Something went wrong. Please try again later'});
      });
    }

  // calculate cost for added guests
  await con.execute(`SELECT guest FROM main.Room WHERE room_type = '${roomType}'`)
    .then((results) => {
      // console.log('Guest Price: ' + results[0][0].guest);
      additionalPrice += (addedGuests * results[0][0].guest);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).send({message: 'Something went wrong. Please try again later'});
    })

  // add cost of added amenities and number of guests to old price
  // console.log('Additional Price: ' + additionalPrice);
  const newPrice = oldPrice + additionalPrice;
  // console.log('New Price: ' + newPrice);

  con.close();
  return res.status(200).send({newPrice: newPrice});
}