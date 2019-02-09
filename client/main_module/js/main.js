(function () {
	"use strict";

	if (!Array.prototype.find) { Array.prototype.find = require("../../etc/js/polyfills").find; }
	if (!Array.prototype.findIndex) { Array.prototype.findIndex = require("../../etc/js/polyfills").findIndex; }
	if (!window.Promise) { window.Promise = require("promise-polyfill"); }

	const Vue = require("vue");
	const vuex = require("vuex");
	const vuei18n = require("vue-i18n");
	const vueFontawesome = require("@fortawesome/vue-fontawesome").FontAwesomeIcon;

	require("particles.js");
	require("@fortawesome/fontawesome");
	require("gsap/umd/TweenMax");
	require("gsap/umd/ScrollToPlugin");
	require("gsap/umd/TextPlugin");
	require("../../etc/libs/gsap_plugins/MorphSVGPlugin");
	require("../../etc/libs/gsap_plugins/ScrambleTextPlugin.js");
	require("../../etc/libs/gsap_plugins/DrawSvgPlugin.js");
	require("../../etc/libs/gsap_plugins/SplitText.js");

	Vue.use(vuex);
	Vue.use(vuei18n);
	Vue.component("FontAwesomeIcon", vueFontawesome);

	return new Vue({
		"el": "#calendar-app",
		"name": "main",
		"store": require("./store/store"),
		"i18n": require("./i18n/configs"),
		"render": function (h) {
			return h(require("./components/app.vue"));
		}
	});



}());