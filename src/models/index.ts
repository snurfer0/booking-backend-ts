import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import AddressFactory from './Address';
import BookingFactory from './Booking';
import EventFactory from './Event';
import EventUsersFactory from './EventUsers';
import UserFactory from './User';

const options: SequelizeOptions = {
	dialect: 'sqlite',
	database: 'bookings',
	storage: './db/development.db',
};


export const sequelize: Sequelize = new Sequelize(options);

export const User = UserFactory(sequelize);
export const Event = EventFactory(sequelize);
export const EventUsers = EventUsersFactory(sequelize);
export const Address = AddressFactory(sequelize);
export const Booking = BookingFactory(sequelize);

Booking.belongsTo(User);
Booking.belongsTo(Event);
Booking.belongsTo(Address);
User.belongsToMany(Event, {
	through: { model: EventUsers, unique: false },
	foreignKey: 'userId',
});
Event.belongsToMany(User, {
	through: { model: EventUsers, unique: false },
	foreignKey: 'eventId',
});

// User.sync({ alter: true, force: true });
// Event.sync({ alter: true, force: true });
// EventUser.sync({ alter: true, force: true });
// Address.sync({ alter: true, force: true });
// Booking.sync({ alter: true, force: true });

// sequelize.sync({ alter: true, force: true });
