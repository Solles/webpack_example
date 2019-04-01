
import * as React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Example from './containers/Example';
import run from '../common';
import OtherPage from '../components/OtherPage';

// This will create our example page with a back button to the index page.
run(({ back }) => (
	<Provider store={store}>
		<OtherPage back={back}>
			<Example />
		</OtherPage>
	</Provider>
));
