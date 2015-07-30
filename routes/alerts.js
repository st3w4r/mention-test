var express = require('express');
var https = require('https');
var querystring = require('querystring');
var request = require('request');
var config = require('../config');

var router = express.Router();

var hostName = config.hostName;
var accessToken = config.accessToken;

function getMe(req, res, next) {
	var accountMe;
	var headers = {
			'Accept': 'application/json',
			'Authorization': 'Bearer ' + accessToken
	}

	var options = {
		url: hostName + '/api/accounts/me',
		method: 'GET',
		headers: headers
	}

	request(options, function(error, response, body)
	{
		if (!error && response.statusCode == 200)
		{
			accountMe = JSON.parse(body)._links.me.href;
			console.log(accountMe);
			getAlerts(req, res, next, accountMe);
		}
		else
		{
			console.log('Error accounts me');
		}
	});
}

function getAlerts(req, res, next, accountMe) {
	var headers = {
			'Accept': 'application/json',
			'Accept-Language': 'fr',
			'Authorization': 'Bearer ' + accessToken
	}

	var options = {
		url: hostName + accountMe + '/alerts',
		method: 'GET',
		headers: headers
	}

	request(options, function(error, response, body)
	{
		if (!error && response.statusCode == 200)
		{
			var alerts = JSON.parse(body).alerts;

			var arrNames = [];
			var arrKeyWords = [];
			for (var i in alerts)
			{
				arrNames.push(alerts[i].name);
				arrKeyWords.push(alerts[i].primary_keyword);

				console.log(alerts[i].name);
				console.log(alerts[i].primary_keyword);
			}
			res.render('alerts', { arrNames: arrNames, arrKeyWords: arrKeyWords});
		}
		else
		{
			res.send('error');
			console.log('error');
		}
	});
}

router.get('/', function(req, res, next) {
	getMe(req, res, next);
});

module.exports = router;
