(function () {
	"use strict";

	const Vuex = require("vuex");
	module.exports = new Vuex.Store({
		"modules": {
			"i18n": require("./i18n/module"),
			"utilities": require("./utilities/module"),
		},
		"strict": process.env.NODE_ENV !== "production"
	});

}());