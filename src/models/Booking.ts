import { DataTypes, ModelDefined, Sequelize, Optional } from 'sequelize';

// You can also define modules in a functional way
export interface BookingAttributes {
	id: number;
	totalPrice: number;
	addressId: number;
	userId: number;
	eventId: number;
	createdAt: Date;
	updatedAt: Date;
}

// You can also set multiple attributes optional at once
export type BookingCreationAttributes = Optional<BookingAttributes, 'createdAt' | 'updatedAt'>;

// TODO: change any to Sequelize
export default (
	sequelize: Sequelize,
): ModelDefined<BookingAttributes, BookingCreationAttributes> => {
	const Booking: ModelDefined<BookingAttributes, BookingCreationAttributes> =
		sequelize.define(
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
