(function () {
	"use strict";

	module.exports = function Constructor(runInfo) {
		return {
			"runId": runInfo.key,
			"metadata": runInfo.metadata,
			"jobs": runInfo.jobs || {}
		}
	};

}());