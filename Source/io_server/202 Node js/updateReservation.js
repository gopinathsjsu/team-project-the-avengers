const config = require('mysql2/promise');

exports.updateReservation = async (req, res) => {
  const con = await config.createConnection({
    host: "database-1.cdhjvbwqbfsh.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "password"
  });

  const userId = req.user;
  const reservationId = req.body.id;
  const guests = req.body.guests;
  const amenities = req.body.amenities;
  const oldPrice = req.body.oldPrice;
  const price = req.body.price;

  await con.execute(`UPDATE main.Bookings SET price = ${price}, amenities = '${amenities}', guests = ${guests} WHERE id = ${reservationId}`)
    .catch((err) => {
      console.log(err);
      return res.status(500).send({message: 'Something went wrong. Please try again later'});
    })

  // update user points
  const updatedReservationPoints = price/10;
  const oldReservationPoints = oldPrice/10;
  await con.execute(`UPDATE main.user_table SET user_points = user_points - ${oldReservationPoints} + ${updatedReservationPoints} WHERE user_id = ${userId}`)
    .then(() => {
      return res.status(200).send({message: 'Success'});
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).send({message: 'Something went wrong. Please try again later'});
    })
    .then(() => con.close());
}