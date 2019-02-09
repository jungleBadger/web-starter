(function () {
	"use strict";

	module.exports = function (app) {
		const swaggerJSDoc = require("swagger-jsdoc");
		const options = require("../configs/swaggerJSDocs");

		app.get("/", (req, res) => res.status(200).render("./main_module/index.html"));
		require("./partials/data_validation")(app);

		app.get("/api-docs.json", function(req, res) {
			res.setHeader("Content-Type", "application/json");
			res.send(swaggerJSDoc(options));
		});
	};

}());