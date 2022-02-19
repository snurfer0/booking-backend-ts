import { DataTypes, ModelDefined, Sequelize } from 'sequelize';

// You can also define modules in a functional way
interface EventAttributes {
	id: number;
	eventHostId: number;
	title: string;
	description: string;
	startTime: Date;
	endTime: Date;
	createdAt: Date;
	updatedAt: Date;
}

// And with a functional approach defining a module looks like this
export default (sequelize: any): ModelDefined<EventAttributes, null> => {
	const Event: ModelDefined<EventAttributes, null> = sequelize.define(
		'event',
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			eventHostId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'users',
					key: 'id',
				},
			},
			title: {
				type: DataTypes.STRING(45),
				allowNull: false,
			},
			description: {
				type: DataTypes.STRING(250),
				allowNull: false,
			},
			startTime: {
				type: DataTypes.DATE(6),
				allowNull: false,
				defaultValue: new Date(),
			},
			endTime: {
				type: DataTypes.DATE(6),
				allowNull: false,
				defaultValue: new Date(),
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
			tableName: 'events',
			timestamps: true,
		},
	);

	return Event;
};
