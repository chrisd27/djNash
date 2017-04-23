var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Client = new keystone.List('Client', {
	map: { name: 'name' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Client.add({
	name: { type: String, required: true },
	image: { type: Types.CloudinaryImage },
	description: { type: Types.Html, wysiwyg: true, height: 400 },
});

Client.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Client.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Client.register();
