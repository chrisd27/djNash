var keystone = require('keystone');

/**
 * TestimonialCategory Model
 * ==================
 */

var TestimonialCategory = new keystone.List('TestimonialCategory', {
	autokey: { from: 'name', path: 'key', unique: true },
});

TestimonialCategory.add({
	name: { type: String, required: true },
});

TestimonialCategory.relationship({ ref: 'Testimonial', path: 'categories' });

TestimonialCategory.register();
