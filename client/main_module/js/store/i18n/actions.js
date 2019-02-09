(function () {
	"use strict";

	module.exports = {
		"setSelectedLanguage": function (context, language) {
			window.localStorage.setItem("language", language);
			context.commit("selectLanguage", language);
		}
	};

}());