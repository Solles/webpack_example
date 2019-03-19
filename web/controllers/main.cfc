component accessors=true {
	property framework;

	function before() {
		rc.jsContext = {};

		if (framework.getItem() != 'default') {
			rc.jsContext.insert('back', framework.buildURL('main.default'));
		}
	}

	function default(rc) {
		rc.jsContext.insert('urls', [
			{
				text: 'Go to class component example',
				url: framework.buildURL('main.classComponent')
			},
			{
				text: 'Go to function component example',
				url: framework.buildURL('main.functionComponent')
			},
			{
				text: 'Go to Redux example',
				url: framework.buildURL('main.reduxExample')
			}
		]);
	}

	function after(rc) { framework.setView('main.default'); }
}
