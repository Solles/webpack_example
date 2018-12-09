component extends="framework.one" {
	this.name = 'webpack_example';

	function setUpView(rc) {
		var entryJSPath = './assets/js/#getItem()#.js'

		if (fileExists(expandPath(entryJSPath))) {
			rc.entryJSPath = entryJSPath;
		}
	}
}
