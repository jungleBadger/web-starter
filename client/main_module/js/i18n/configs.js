(function () {
	"use strict";

	const VueI18n = require("vue-i18n");
	const DEFAULT_LOCALE = window.localStorage.getItem("language") || process.env.DEFAULT_LOCALE || "pt-BR";
	const DEFAULT_FALLBACK = process.env.DEFAULT_FALLBACK || "en-US";
	const enLang = require("./en-US/lang");
	const ptLang = require("./pt-BR/lang");

	module.exports = new VueI18n({
		"locale": DEFAULT_LOCALE,
		"fallbackLocale": DEFAULT_FALLBACK,
		"dateTimeFormats": {
			"en-US": enLang.dateTimeFormats,
			"pt-BR": ptLang.dateTimeFormats
		},
		"numberFormats": {
			"en-US": enLang.numberFormats,
			"pt-BR": ptLang.numberFormats
		},
		"messages": {
			"en-US": enLang.messages,
			"pt-BR": ptLang.messages
		}
	});

}());