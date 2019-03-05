import ReactDOM from 'react-dom';

export default function run(getRoot) {
	const mainElement = document.getElementById('main');

	ReactDOM.render(
		getRoot(JSON.parse(mainElement.dataset.context)),
		mainElement
	);
}
