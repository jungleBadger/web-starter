(function () {
	"use strict";

	module.exports = {
		"getToastrs": function (context) {
			return context.toastrs;
		},
		"getLastVisit": function (context) {
			return context.lastVisit;
		},
		"getHelpModalState": function (context) {
			return context.helpModalOpen;
		}
	};

}());