var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Services Model
 * ==========
 */

var Services = new keystone.List('Services', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Services.add({
	title: { type: String, required: true },
	image: {type: Types.CloudinaryImage},
	icon: { type: String },
	description: { type: Types.Html, wysiwyg: true, height: 150 },
});

Services.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Services.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Services.register();
