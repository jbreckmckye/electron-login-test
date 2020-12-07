'use strict';
const { app, Menu, Notification, shell } = require('electron');
const config = require('./config');
const auth = require('./auth');

function alert (title, body) {
	new Notification({ title, body }).show();
}

async function getToken () {
	try {
		const token = await auth.getToken();
		alert('getToken success', `See console`);
		console.info('Token:', token)
	} catch (e) {
		alert('getToken failed', `See stdout. Error was "${e.message}"`);
		console.error(e);
	}
}

async function logout () {
	try {
		await auth.logout();
		alert('logout success', 'You should now be logged out');
	} catch (e) {
		alert(`logout fail. See stdout. Error was "${e.message}"`);
	}
}

const debugSubmenu = [
	{
		label: 'Show Settings',
		click() {
			config.openInEditor();
		}
	},
	{
		label: 'Show App Data',
		click() {
			shell.openItem(app.getPath('userData'));
		}
	},
	{
		type: 'separator'
	},
	{
		label: 'Delete Settings',
		click() {
			config.clear();
			app.relaunch();
			app.quit();
		}
	},
	{
		label: 'Delete App Data',
		click() {
			shell.moveItemToTrash(app.getPath('userData'));
			app.relaunch();
			app.quit();
		}
	}
];

module.exports = Menu.buildFromTemplate([
	{
		label: 'electron-auth0-login',
		submenu: [
			{
				label: 'Get token',
				click: getToken
			},
			{
				label: 'Log out',
				click: logout
			}
		]
	},
	{
		label: 'Debug',
		submenu: debugSubmenu
	}
]);
