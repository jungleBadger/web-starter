(function () {
	"use strict";

	module.exports = {
		"trackLocationToastr": function (context, params) {
			context.toastrs.push(params);
		},
		"setLastVisit": function (context, lastVisitTs) {
			context.lastVisit = lastVisitTs;
		}
	}

}());