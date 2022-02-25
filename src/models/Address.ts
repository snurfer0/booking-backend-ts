import { DataTypes, ModelDefined, Sequelize, Optional } from 'sequelize';


interface AddressAttributes {
	id: number;
	venueName: string;
	address: string;
	city: string;
	country: string;
	zip: string;
	createdAt: Date;
	updatedAt: Date;
}
export type AddressCreationAttributes = Optional<
	AddressAttributes,
	'createdAt' | 'updatedAt'
>;


export default (
	sequelize: Sequelize,
): ModelDefined<AddressAttributes, AddressCreationAttributes> => {
	const Address: ModelDefined<AddressAttributes, AddressCreationAttributes> =
		sequelize.define(
			'address',
			{
				id: {
					type: DataTypes.INTEGER,
					allowNull: false,
					primaryKey: true,
					autoIncrement: true,
				},
				venueName: {
					type: DataTypes.STRING(45),
					allowNull: false,
				},
				country: {
					type: DataTypes.STRING(45),
					allowNull: false,
				},
				city: {
					type: DataTypes.STRING(250),
					allowNull: false,
				},
				address: {
					type: DataTypes.STRING(45),
					allowNull: false,
				},
				zip: {
					type: DataTypes.STRING(25),
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
			{
				tableName: 'addresses',
				timestamps: true,
			},
		);

	return Address;
};

