import { createApp } from './app';

const startServer = async () => {
	const port = process.env.PORT || 8000;

	const app = await createApp();

	try {
		// await User.sync({ alter: true, force: true });
		// await Event.sync({ alter: true, force: true });
		// await EventUser.sync({ alter: true, force: true });
		// await Address.sync({ alter: true, force: true });
		// await Booking.sync({ alter: true, force: true });
	} catch (err) {
		console.log(err);
	}

	app.listen(port, (): void => {
		console.log(`API Server is now running on port ${port}`);
	});
};

startServer();
