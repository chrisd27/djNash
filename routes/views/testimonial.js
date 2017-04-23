var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'blog';
	locals.filters = {
		testimonial: req.params.testimonial,
	};
	locals.data = {
		testimonials: [],
	};

	// Load the current testimonial
	view.on('init', function (next) {

		var q = keystone.list('Testimonial').model.findOne({
			state: 'published',
			slug: locals.filters.testimonial,
		}).populate('categories');

		q.exec(function (err, result) {
			locals.data.testimonial = result;
			next(err);
		});

	});

	// Load other testimonials
	view.on('init', function (next) {

		var q = keystone.list('Testimonial').model.find();
		//.where('state', 'published').sort('-publishedDate').populate('author').limit('4');

		q.exec(function (err, results) {
			locals.data.testimonials = results;
			next(err);
		});

	});

	// Render the view
	view.render('testimonial');
};
