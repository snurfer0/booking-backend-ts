import { DataTypes, ModelDefined } from 'sequelize';

// You can also define modules in a functional way
interface EventUsersAttributes {
	id: number;
	userId: number;
	eventId: number;
	createdAt: Date;
	updatedAt: Date;
}

// And with a functional approach defining a module looks like this
export default (sequelize: any): ModelDefined<EventUsersAttributes, null> => {
	const EventUsers: ModelDefined<EventUsersAttributes, null> = sequelize.define(
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
					unique:false
				},
			},
			eventId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'events',
					key: 'id',
					unique: false
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
