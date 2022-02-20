import { ApolloServer } from 'apollo-server-express';
import { createApp } from './app';
import schema from './graphql/schemasMap';
import { Event, User, EventUsers, Address, Booking } from './models';

const startServer = async () => {
	const port = process.env.PORT || 8000;

	const app = await createApp();

	const server = new ApolloServer({ schema });

	try {
		// await User.sync({ alter: true, force: true });
		// await Event.sync({ alter: true, force: true });
		// await EventUser.sync({ alter: true, force: true });
		// await Address.sync({ alter: true, force: true });
		// await Booking.sync({ alter: true, force: true });
	} catch (err) {
		console.log(err);
	}

	await server.start();

	server.applyMiddleware({ app, path: '/graphql' });

	app.listen(port, (): void => {
		console.log(`Server is now running on port ${port}`);
	});
};

startServer();
