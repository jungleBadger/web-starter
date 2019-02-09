/**
 * Created by danielabrao on 01/07/17.
 */
(function () {
	"use strict";

	const httpClient = require("../../../etc/js/http");
	module.exports = {
		httpGet() {
			return httpClient.get("/fetchRunIds");
		},
		httpPost(someData) {
			return httpClient.post("/fetchRunIds", someData);
		}
	}
}());