(function () {
	"use strict";

	module.exports = {
		"swaggerDefinition": {
			"info": {
				"title": "EPM Data validation",
				"version": "1.0.0",
			},
		},
		"apis": ["./server/routes/partials/*.js"]
	}
}());