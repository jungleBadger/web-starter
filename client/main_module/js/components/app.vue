<template>
	<div id="calendar-app">
	</div>
</template>
<script type="text/javascript">
(function (TweenMax, TimelineMax) {
	"use strict";

	const i18nGetters = require("../store/i18n/mappers/mapGetters");

	module.exports = {
		"name": "DvApp",
		"components": {
		},
		"mixins": [
		],
		"props": {},
		"data": function() {
			return {
			}
		},
		"computed": {
			...i18nGetters
		},
		"methods": {
		},
		"beforeCreate": function () {
			this.$store.commit("i18n/setLanguages", {
				"availableLanguages": Object.keys(this.$i18n.messages),
				"selectedLanguage":  this.$i18n.locale
			});
		},
		"beforeMount": function () {
		},
		"mounted": function () {
		}
	};
}(window.TweenMax, window.TimelineMax));
</script>
<style scoped lang="scss" rel="stylesheet/scss">

	@import "../../../etc/css/variables.scss";


	#calendar-app {
	}
</style>
