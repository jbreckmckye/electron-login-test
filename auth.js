'use strict';

const ElectronAuth0Login = require('electron-auth0-login').default;
const env = require('./.env.json');

module.exports = new ElectronAuth0Login({
	// Get these from your Auth0 application console
	auth0Audience: env.auth0Audience,
	auth0ClientId: env.auth0ClientId,
	auth0Domain: env.auth0Domain,
	auth0Scopes: env.auth0Scopes
});
