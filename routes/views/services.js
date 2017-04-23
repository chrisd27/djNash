var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'blog';
	locals.filters = {
		service: req.params.service,
	};
	locals.data = {
		services: [],
	};

	// Load the current service
	view.on('init', function (next) {

		var q = keystone.list('Service').model.findOne({
			state: 'published',
			slug: locals.filters.service,
		});//.populate('author categories');

		q.exec(function (err, result) {
			locals.data.service = result;
			next(err);
		});

	});

	// Load other services
	view.on('init', function (next) {

		var q = keystone.list('Service').model.find();
		//.where('state', 'published').sort('-publishedDate').populate('author').limit('4');

		q.exec(function (err, results) {
			locals.data.services = results;
			next(err);
		});

	});

	// Render the view
	view.render('service');
};
