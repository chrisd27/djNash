var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	locals.data = {
		home: [],
		services: [],
		clients: [],
		testimonials: [],
		gallery: [],
		about: []
	};

	// Get Home Model
	view.on('init', function (next) {

		var q = keystone.list('Home').model.find();
		q.exec(function (err, result) {
			console.log("home "+result);
			locals.data.home = result;
			next(err);
		});

	});

	// Get Clients Model
	view.on('init', function (next) {

		var q = keystone.list('Client').model.find();

		q.exec(function (err, result) {
			console.log("clients "+result);
			locals.data.clients = result;
			next(err);
		});

	});

	// Get Testimonials Model
	view.on('init', function (next) {

		var q = keystone.list('Testimonial').model.find().limit(6);

		q.exec(function (err, result) {
			locals.data.testimonials = result;
			next(err);
		});

	});

	// Get Services Model
	view.on('init', function (next) {

		var q = keystone.list('Services').model.find().limit(3);

		q.exec(function (err, result) {
			locals.data.services = result;
			next(err);
		});

	});
	
	// Get About Model
	view.on('init', function (next) {

		var q = keystone.list('About').model.find().limit(1);
		console.log(q);
		q.exec(function (err, result) {
			locals.data.about = result;
			next(err);
		});

	});

	// Get Gallery Model
	view.on('init', function (next) {

		var q = keystone.list('Gallery').model.find().limit(9);

		q.exec(function (err, result) {
			locals.data.gallery = result;
			next(err);
		});

	});

	// Render the view
	view.render('index');
};
