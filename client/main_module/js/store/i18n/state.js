(function () {
	"use strict";

	module.exports = {
		"state": {
			"languages": [],
			"selectedLanguage": window.localStorage.getItem("language") || "en-US",
			"currentDateTime": new Date()
		}
	};
}());