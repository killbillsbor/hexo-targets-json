/* global hexo */

const JSON = require('json3');

hexo.extend.generator.register(hexo_targets_json);

function hexo_targets_json(locals) {
	let permalinks = [];

	if (typeof hexo.config.monitoring === 'undefined') return

	locals.posts.sort('date', -1).each((post) => {
		let url = (hexo.config.monitoring.base
			? hexo.config.monitoring.base + post.path
			: hexo.config.url + (hexo.config.root ? hexo.config.root : '/') + post.path);

		permalinks.push(url);
	});

	hexo.route.set('targets.json', JSON.stringify([{
		labels: {
			project: hexo.config.monitoring.project
		},
		targets: permalinks
	}]));
}
