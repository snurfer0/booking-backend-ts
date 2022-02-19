import bodyParser from 'body-parser';
import express from 'express';
import errorhandler from 'strong-error-handler';

export const createApp = async () => {
    let app = express();
    
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

	app.use(
		errorhandler({
			debug: process.env.ENV !== 'prod',
			log: true,
		}),
    );
    
    return app
};