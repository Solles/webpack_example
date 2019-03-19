component extends="framework.one" {
	this.name = 'webpack_example';

	function setUpView(rc) {
		var entryPoints = deserializeJSON(fileRead('../entryPoints.json'));
		var item = getItem();

		if (entryPoints.keyExists(item)) {
			rc.entryJSPath = './assets/js/#item#.js';
		}
	}
}
