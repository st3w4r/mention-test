var express = require('express');
// var https = require('https');
// var querystring = require('querystring');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	// var idMe = '433828_p7c1o80si28sgogw44ook4ococ8gsc0gswgcsocg0ccw8owgc';
	// var accessToken = 'MmE5NDViMmJmOGRjNWIxYmYxZTRmM2E5OGUwODQwNTcwYTQyN2YwNzYxMTdkMGMyNWVkMmM4ZTNjOGJhYWRiOA';
	//
	// var options = {
	// 	hostname: 'api.mention.net',
	// 	path: '/api/accounts/' + idMe + '/alerts',
	// 	method: 'GET',
	// 	headers: {
	// 		'Accept': 'application/json',
	// 		'Accept-Language': 'fr',
	// 		'Authorization': 'Bearer ' + accessToken
	// 	}
	// };
	//
	// var req = https.request(options, function(res) {
	// 	res.setEncoding('utf8');
	// 	res.on('data', function (chunk)
	// 	{
	// 		console.log(chunk);
	// 		// req.write(chunk);
	// 		// res.json(chunk);
	// 	});
	// 	res.once('end', function ()
	// 	{
	// 		// console.log(body.toString('utf8'));
	// 	});
	// });
	//
	// // req.end(new Buffer(JSON.stringify(requestData)));
	// req.end();
	// req.on('error', function(e) {
	// 	console.error(e);
	// });
	res.render('index', { title: 'Mention' });
});

module.exports = router;
