var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'blog';
	locals.filters = {
		client: req.params.client,
	};
	locals.data = {
		clients: [],
	};

	// Load the current client
	view.on('init', function (next) {

		var q = keystone.list('Client').model.find();

		q.exec(function (err, result) {
			locals.data.client = result;
			next(err);
		});

	});

	// // Load other clients
	// view.on('init', function (next) {

	// 	var q = keystone.list('Client').model.find();
	// 	//.where('state', 'published').sort('-publishedDate').populate('author').limit('4');

	// 	q.exec(function (err, results) {
	// 		locals.data.clients = results;
	// 		next(err);
	// 	});

	// });

	// Render the view
	view.render('client');
};
