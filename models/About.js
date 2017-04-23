var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * About Model
 * ==========
 */

var About = new keystone.List('About', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

About.add({
	title: { type: String, required: true },
	image: { type: Types.CloudinaryImage },
	content: {
		title: { type: String},
		content: { type: Types.Html, wysiwyg: true, height: 400 },
	}
	
});

About.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

About.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
About.register();
