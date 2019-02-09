(function () {
	"use strict";

	module.exports = {
		"languages": function (context) {
			return context.state.languages;
		},
		"selectedLanguage": function (context) {
			return context.state.selectedLanguage;
		},
		"currentDateTime": function (context) {
			return context.state.currentDateTime;
		},
		"dayRange": function (context) {
			let actualHours = context.state.currentDateTime.getHours();

			if (actualHours >= 18 && actualHours <= 24) {
				return "night";
			} else if (actualHours < 18 && actualHours >= 13) {
				return "afternoon";
			} else {
				return "morning";
			}
		}
	};

}());