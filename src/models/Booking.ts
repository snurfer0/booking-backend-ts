import { DataTypes, ModelDefined, Sequelize } from 'sequelize';

// You can also define modules in a functional way
interface BookingAttributes {
	id: number;
	totalPrice: number;
	addressId: number;
	userId: number;
	eventId: number;
	createdAt: Date;
	updatedAt: Date;
}

// And with a functional approach defining a module looks like this
export default (sequelize: any): ModelDefined<BookingAttributes, null> => {
	const Booking: ModelDefined<BookingAttributes, null> = sequelize.define(
		'booking',
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			totalPrice: {
				type: DataTypes.DECIMAL(10, 2),
				allowNull: false,
			},
			addressId: {
				type: DataTypes.INTEGER,
				allowNull: true,
				references: {
					model: 'addresses',
					key: 'id',
				},
			},
			userId: {
				type: DataTypes.INTEGER,
				allowNull: true,
				references: {
					model: 'users',
					key: 'id',
				},
			},
			eventId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'events',
					key: 'id',
				},
			},
			createdAt: {
				type: DataTypes.DATE(6),
				allowNull: false,
				defaultValue: new Date(),
			},
			updatedAt: {
				type: DataTypes.DATE(6),
				allowNull: false,
				defaultValue: new Date(),
			},
		},
		{ tableName: 'bookings', timestamps: true },
	);

	return Booking;
};
