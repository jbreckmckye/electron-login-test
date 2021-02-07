'use strict';

const keytar = require('keytar');
const electronAuth0Login = require('electron-auth0-login');
const env = require('./.env.json');

module.exports = electronAuth0Login({
	// Get these from your Auth0 application console
	auth0: {
		audience: env.auth0Audience,
		clientId: env.auth0ClientId,
		domain: env.auth0Domain,
		scopes: env.auth0Scopes
	},
	debug: true,
	refreshTokens: {
        keytar,
		appName: 'electron-login-test'
	}
});
