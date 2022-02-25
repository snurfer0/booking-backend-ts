import { DataTypes, ModelDefined, Optional, Sequelize } from 'sequelize';

interface EventUsersAttributes {
	id: number;
	userId: number;
	eventId: number;
	createdAt: Date;
	updatedAt: Date;
}

export type EventUsersCreationAttributes = Optional<
	EventUsersAttributes,
	'createdAt' | 'updatedAt'
>;


// TODO: Change any type to Sequelize
export default (
	sequelize: any,
): ModelDefined<EventUsersAttributes, EventUsersCreationAttributes> => {
	const EventUsers: ModelDefined<
		EventUsersAttributes,
		EventUsersCreationAttributes
	> = sequelize.define(
		'eventuser',
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			userId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'users',
					key: 'id',
					unique: false,
				},
			},
			eventId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'events',
					key: 'id',
					unique: false,
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
		{
			tableName: 'eventusers',
			timestamps: true,
		},
	);

	return EventUsers;
};
