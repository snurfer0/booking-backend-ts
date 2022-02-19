import { DataTypes, ModelDefined, Sequelize } from 'sequelize';

// You can also define modules in a functional way
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

// And with a functional approach defining a module looks like this
export default (
	sequelize: any
): ModelDefined<AddressAttributes, null> => {
	const Address: ModelDefined<
		AddressAttributes, null
	> = sequelize.define(
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

