import { DataTypes, ModelDefined, Sequelize, Optional,  } from 'sequelize';

interface UserAttributes {
	id: number;
	email: string;
	createdAt: Date;
	updatedAt: Date;
}

export type UserCreationAttributes = Optional<
	UserAttributes,
	'createdAt' | 'updatedAt'
>;


export default (
	sequelize: Sequelize,
): ModelDefined<UserAttributes, UserCreationAttributes> => {
	const User: ModelDefined<UserAttributes, UserCreationAttributes> =
		sequelize.define(
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

