(function () {
	"use strict";

	const dataValidation = require("../../helpers/data_validation");

	module.exports = function (app) {
		/**
		 * @swagger
		 * /fetchRunIds:
		 *   get:
		 *     description:
		 *     produces:
		 *       - application/json
		 *     parameters:
		 *     responses:
		 *       200:
		 *         description:
		 *       500:
		 *         description: Error handler
		 */
		app.get("/fetchRunIds", (req, res) => {
			dataValidation.fetchAvailableRunIDs(
			).then(result => {
				return res.status(200).send(result);
			}).catch(err => {
				return res.send(err.status || 500).send(err.message || err);
			});
		});
		/**
		 * @swagger
		 * /fetchJobInfo:
		 *   get:
		 *     description:
		 *     produces:
		 *       - application/json
		 *     parameters:
		 *     responses:
		 *       200:
		 *         description:
		 *       500:
		 *         description: Error handler
		 */
		app.get("/fetchJobInfo", (req, res) => {
			dataValidation.fetchJobInfo(
				req.query.jobDocumentId
			).then(result => {
				return res.status(200).send(result);
			}).catch(err => {
				return res.send(err.status || 500).send(err.message || err);
			});
		});
		/**
		 * @swagger
		 * /fetchJobsInfo:
		 *   post:
		 *     description:
		 *     produces:
		 *       - application/json
		 *     parameters:
		 *     responses:
		 *       200:
		 *         description:
		 *       500:
		 *         description: Error handler
		 */
		app.post("/fetchJobsInfo", (req, res) => {
			dataValidation.fetchJobsInfo(
				req.body.jobsDocumentIdList
			).then(result => {
				return res.status(200).send(result);
			}).catch(err => {
				return res.send(err.status || 500).send(err.message || err);
			});
		});
	};

}());