var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Testimonial Model
 * ==========
 */

var Testimonial = new keystone.List('Testimonial', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Testimonial.add({
	title: { type: String, required: true },
	tagLine: { type: String},
	publishedDate: { type: Types.Date, index: true },
	image: { type: Types.CloudinaryImage },
	description: { type: Types.Html, wysiwyg: true, height: 400 },
	categories: { type: Types.Relationship, ref: 'TestimonialCategory', many: true },
});

Testimonial.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Testimonial.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Testimonial.register();
