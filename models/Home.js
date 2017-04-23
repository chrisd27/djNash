var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Home Model
 * ==========
 */

var Home = new keystone.List('Home', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Home.add({
	title: { type: String, required: true },
	tagLine: { type: String },
	image: { type: Types.CloudinaryImage },
});

Home.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Home.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Home.register();
