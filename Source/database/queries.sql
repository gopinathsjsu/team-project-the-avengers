#get room rates based on room_id and user_type -- member or guest
SELECT checkInDate, checkOutDate, r.room_description, if (u.user_type='member', r.room_rate_members, r.room_rate_guests) as rate
FROM hotel.bookings_table b, hotel.user_table u, hotel.rooms_table r
where r.room_id=1 and u.user_type='guest';

#get rates based on user_type and room_id
select u.user_type, r.room_rate_guests, r.room_name
from hotel.user_table u, hotel.rooms_table r
where u.user_type='member' and r.room_id=1;

#get total based on room_rate and amenity
SELECT r.room_description, a.amenity_name, a.amenity_price, sum(if (u.user_type='member', r.room_rate_members, r.room_rate_guests)+a.amenity_price) as total, if (u.user_type='member', r.room_rate_members, r.room_rate_guests) as rate
FROM hotel.bookings_table b, hotel.user_table u, hotel.rooms_table r, hotel.amenities_table a
where r.room_id=1 and u.user_type='guest' and a.amenity_id=2;

#get price based on dynamic pricing and location
#consider total price = room rate+amenities prices
#math = total price * dynamic multiplier + total price*location multiplier + total price
SELECT r.room_description, a.amenity_name, a.amenity_price, r.room_rate_guests, r.room_rate_members, h.costMultiple, h.city, rate_multiplier, ROUND(sum(((if (u.user_type='member', r.room_rate_members, r.room_rate_guests)+a.amenity_price)*rate_multiplier)+((if (u.user_type='member', r.room_rate_members, r.room_rate_guests)+a.amenity_price)*h.costMultiple)+(if (u.user_type='member', r.room_rate_members, r.room_rate_guests)+a.amenity_price)),2) as total
FROM hotel.bookings_table b, hotel.user_table u, hotel.rooms_table r, hotel.amenities_table a, hotel.hotel_table h, hotel.dynamic_pricing
where r.room_id=1 and u.user_type='member' and a.amenity_id=2 and h.hotel_id=5 and rate_type='weekend'
group by rate_multiplier