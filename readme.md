# Electron login test

This is a test application for [Electron-Auth0-Login](https://github.com/jbreckmckye/electron-auth0-login).

It's meant for manually testing the plugin, but you could also use it as an integration guide. It was scaffolded using https://github.com/sindresorhus/generator-electron.

## Setup

1. Clone the app and create a free Auth0 dev account, an Auth0 'native' app (not 'machine to machine'), and at least one user.
2. In the Auth0 UI whitelist the following callback URL: `https://{your-auth0-domain}/mobile`
3. Copy `.env.example.json` into `.env.json` and fill in all the values.
4. Run `npm start` to fire up the app.

## Testing the plugin

You can log in using the 'auth' menu. The UI will display your access token, refresh token and expiry time.

Make sure you can

- [x] Log in as your user
- [x] Log out as your user
- [x] Stop and restart the app and still be remembered when refresh tokens enabled
- [x] Retrieve new auth tokens after token expiry (see the UI)
