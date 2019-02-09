/**
 * Created by danielabrao on 5/20/17.
 **/
(function () {
	"use strict";
	/**
	 * Passport internal helper
	 * @ignore
	 * */
	const LocalStrategy = require("passport-local").Strategy;
	const security = require("./security");
	const passport = require("passport");

	module.exports = function (adminUser, platformUser) {

		passport.serializeUser(function (user, done) {
			done(null, user);
		});

		passport.deserializeUser(function (profile, done) {
			return done(null, profile);
		});


		passport.use("client-login", new LocalStrategy({
			"passReqToCallback": true
		}, function (req, username, password, done) {
			if (!req.body.company) {
				return done(null, false, new Error("Can not validate client login without company info"));
			}
			platformUser.queryPlatformUser({
				"query": {
					"email": username,
					"company": req.body.company
				},
				"projection": {
					"_id": 1,
					"password": 1,
					"email": 1,
					"company": 1,
					"name": 1,
					"isActive": 1,
					"role": 1
				},
				"strict": true
			}).then(user => {
				security.validateHash(
					password,
					user.password
				).then(() => {
					delete user.password;
					user.updated = Date.now();
					return done(null, user);
				}).catch(err => done(null, false, err))
			}).catch(err => done(null, false, err))
		}
		));

		passport.ensureUserREST = (req, res, next) => {
			return req.user ? next() : res.status(401).send("Not authorized");
		};

		passport.ensureUser = (req, res, next) => {
			return req.user ? next() : res.redirect("/join");
		};

		return passport;
	};
}());