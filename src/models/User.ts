import { DataTypes, ModelDefined, Sequelize, Optional,  } from 'sequelize';

// You can also define modules in a functional way
interface UserAttributes {
	id: number;
	email: string;
	createdAt: Date;
	updatedAt: Date;
}

// And with a functional approach defining a module looks like this
export default (sequelize: any): ModelDefined<UserAttributes, null> => {
	const User: ModelDefined<UserAttributes, null> = sequelize.define(
		'user',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			email: {
				type: DataTypes.STRING(45),
				allowNull: true,
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
			tableName: 'users',
			timestamps: true,
		},
	);

	return User;
};

