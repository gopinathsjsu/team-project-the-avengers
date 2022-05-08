const path = require('path');

const hotelPromoDir = path.join(__dirname, 'storage', 'hotelPromo');

const hotelPromoImageDir = {
    path:  path.join(hotelPromoDir, 'hotelImages')
};

module.exports = {hotelPromoImageDir};