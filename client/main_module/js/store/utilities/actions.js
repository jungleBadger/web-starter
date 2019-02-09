(function () {
	"use strict";

	const iziToast = require("izitoast");
	module.exports = {
		"openToaster": function (context, props) {
			iziToast[props.toastType || "info"]({
				"title": props.title,
				"message": props.message || "",
				"timeout": props.timeout || false,
				"id": props.id,
				"toastOnce": props.toastOnce,
				"animateInside": false,
				"buttons": [
				]
			});
		},
		"logLastVisit": function (store) {
			// This can be async later on i.e fetching a database
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					let visitTime = Date.now();
					try {
						window.localStorage.setItem("lastVisit", visitTime);
						resolve(visitTime);
					} catch (err) {
						store.dispatch("utilities/openToaster",  {
							"toastType": "error",
							"title": "Error logging last visit",
							"message": err.message || err
						});
						reject(err);
					}

				}, 0);
			});
		},
		"setLastVisit": function (store) {
			// This can be async later on
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					let visitTime = null;
					try {
						visitTime = window.localStorage.getItem("lastVisit");
						store.commit("setLastVisit", visitTime);
						resolve(visitTime);
					} catch (err) {
						store.dispatch("utilities/openToaster",  {
							"toastType": "error",
							"title": "Error fetching last visit",
							"message": err.message || err
						});
						reject(err);
					}
				}, 0);
			});
		}

	};

}());