import { IResolvers } from '@graphql-tools/utils';
import { Model } from 'sequelize';
import {
	Address as dbAddress,
	Booking as dbBooking,
	Event as dbEvent,
	User as dbUser,
} from '../../models';
import {
	BookingAttributes,
	BookingCreationAttributes,
} from '../../models/Booking';
import {
	defaultAddressAttributes,
	defaultEventsAttributes,
	defaultUsersAttributes,
} from '../../utils/constants';
import { MutationDeleteBookingArgs, QueryBookingsArgs } from '../generated';

export const BookingsResolvers: IResolvers = {
	Query: {
		async bookings(
			_: void,
			args: QueryBookingsArgs,
		): Promise<Model<BookingAttributes, BookingCreationAttributes>[]> {
			let bookings = await dbBooking.findAll({
				include: [
					{
						model: dbUser,
						attributes: defaultUsersAttributes,
					},
					{
						model: dbAddress,
						attributes: defaultAddressAttributes,
					},
					{
						model: dbEvent,
						attributes: defaultEventsAttributes,
						include: [
							{
								model: dbUser,
								through: { attributes: [] },
								attributes: defaultUsersAttributes,
							},
						],
					},
				],
				limit: args.limit
			});
			return bookings;
		},
	},
	Mutation: {
		async deleteBooking(_: void, args: MutationDeleteBookingArgs) {
			return {
				token: 'token',
			};
		},
	},
};
