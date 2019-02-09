(function () {
	"use strict";

	const mutations = require("./constants/mutation-types");

	module.exports = {
		[mutations.SET_LANGUAGES]: function (context, params = {}) {
			context.state.languages = params.availableLanguages;
			context.state.selectedLanguage = params.selectedLanguage;
		},
		[mutations.SELECT_LANGUAGE]: function (context, language) {
			context.state.selectedLanguage = language;
		},
		[mutations.SET_CURRENT_DATETIME]: function (context) {
			context.state.currentDateTime = new Date();
		},

	}

}());