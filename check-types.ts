import keytar from 'keytar';
import { auth0Login } from 'electron-auth0-login/dist';

const env = require('./.env.json');

const auth = auth0Login({
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

async function testUse() {
	const loggedIn: boolean = auth.isLoggedIn();
	const tokenP: Promise<string> = auth.getToken();
	const logoutP: Promise<void> = auth.logout();
	const loginP: Promise<string> = auth.login();
}
