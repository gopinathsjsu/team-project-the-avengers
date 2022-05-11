const config = require('mysql2/promise');

exports.updateReservation = async (req, res) => {
  const con = await config.createConnection({
    host: "database-1.cdhjvbwqbfsh.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "password"
  });

  const reservationId = req.body.id;
  const guests = req.body.guests;
  const amenities = req.body.amenities;
  const price = req.body.price;

  await con.execute(`UPDATE main.Bookings SET price = ${price}, amenities = '${amenities}', guests = ${guests} WHERE id = ${reservationId}`)
    .then(() => {
      // console.log('Successfully updated booking');
      return res.status(200).send({message: 'Success'});
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).send({message: 'Something went wrong. Please try again later'});
    })
    .then(() => con.close());
}