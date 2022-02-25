import { Router } from 'express';
import {
	getBookingsFromPage,
	deleteBooking,
} from '../controllers/bookings.controller';

export const bookingsRoutes = (app: any) => {
    let router: Router = Router();
    router.get('/:page', getBookingsFromPage);
    router.delete('/delete/:id', deleteBooking);
    app.use('/api/bookings', router);
};
