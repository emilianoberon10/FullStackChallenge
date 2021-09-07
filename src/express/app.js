const express = require('express')
const app = express()

app.use(express.json())

function makeHandlerAwareOfAsyncErrors(handler) {
	return async function(req, res, next) {
		try {
			await handler(req, res);
		} catch (error) {
			next(error);
		}
	}
}

module.exports = app
