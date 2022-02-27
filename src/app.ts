import bodyParser from 'body-parser';
import express from 'express';
import errorhandler from 'strong-error-handler';
import * as dotenv from 'dotenv';
import { bookingsRoutes } from './routes/bookings.routes';
import cors from 'cors';

export const createApp = async () => {
	let app = express();

	// Cors options set up
	var corsOptions = {
		origin: [
			'http://localhost:3000',
			'http://localhost:3001',
		],
		optionsSuccessStatus: 200,
	};

	app.use(cors(corsOptions));

	// environment variables path
	dotenv.config({ path: __dirname + '../.env' });

	// middleware for parsing application/x-www-form-urlencoded
	app.use(bodyParser.urlencoded({ extended: true }));

	// middleware for json body parsing
	app.use(bodyParser.json({ limit: '5mb' }));

	// enable corse for all origins
	app.use((req, res, next) => {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Expose-Headers', 'x-total-count');
		res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
		res.header(
			'Access-Control-Allow-Headers',
			'Content-Type,authorization',
		);

		next();
	});

	bookingsRoutes(app);

	app.use(
		errorhandler({
			debug: process.env.ENV !== 'prod',
			log: true,
		}),
	);

	return app;
};
