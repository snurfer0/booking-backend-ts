import { Sequelize } from 'sequelize-typescript';
import AddressFactory from './Address';
import BookingFactory from './Booking';
import EventFactory from './Event';
import EventUserFactory from './EventUser';
import UserFactory from './User';

export const sequelize = new Sequelize({
	dialect: 'sqlite',
	database: 'bookings',
	storage: './db/development.db',
});

export const User = UserFactory(sequelize);
export const Event = EventFactory(sequelize);
export const EventUser = EventUserFactory(sequelize);
export const Address = AddressFactory(sequelize);
export const Booking = BookingFactory(sequelize);

Booking.belongsTo(User);
Booking.belongsTo(Event);
Booking.belongsTo(Address);
EventUser.hasMany(User);
EventUser.hasMany(Event);

// User.sync({ alter: true, force: true });
// Event.sync({ alter: true, force: true });
// EventUser.sync({ alter: true, force: true });
// Address.sync({ alter: true, force: true });
// Booking.sync({ alter: true, force: true });

sequelize.sync()
