import { NextFunction, Request, Response } from 'express';
import { Model } from 'sequelize';
import PageNotFoundException from '../exceptions/PageNotFoundException';
import {
	Address as dbAddress,
	Booking as dbBooking,
	Event as dbEvent,
	User as dbUser,
} from '../models';
import {
	BookingAttributes,
	BookingCreationAttributes,
} from '../models/Booking';
import {
	defaultAddressAttributes,
	defaultBookingsAttributes,
	defaultEventsAttributes,
	defaultUsersAttributes,
} from '../utils/constants';
export const deleteBooking = async (
	req: Request,
	res: Response,
): Promise<void> => {
	try {
		let result: number = await dbBooking.destroy({
			where: {
				id: req.params.id,
			},
		});
		if (result) {
			res.status(202).send({
				message: `Booking deleted: ${req.params.id}`,
			});
		} else {
			res.status(304).send({});
		}
	} catch (err: unknown) {
		res.status(400).send(err);
	}
};

export const getBookingsFromPage = async (
	req: Request,
	res: Response,
	next: NextFunction,
): Promise<void> => {
	try {
		let offset = 0;
		const page = parseInt(req.params.page);

		if (page < 1) {
			next(new PageNotFoundException(page));
		}

		if (page > 1) {
			offset = 6 * (page - 1);
		}

		const totalPages: number = Math.round((await dbBooking.count()) / 6);

		let bookings: Model<BookingAttributes, BookingCreationAttributes>[] =
			await dbBooking.findAll({
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
				offset: offset,
				limit: 6,
				attributes: defaultBookingsAttributes,
			});

		if (bookings) {
			res.status(200).send({ bookings: bookings, pages: totalPages });
		} else {
			res.status(404).send({ message: 'No bookings found.' });
		}
	} catch (err) {
		console.error(err);
		res.status(400).send(err);
	}
};
