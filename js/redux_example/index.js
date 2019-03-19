
import * as React from 'react';
import Example from './components/Example';
import run from '../common';
import OtherPage from '../components/OtherPage';

// This will create our example page with a back button to the index page.
run(({ back }) => (
	<OtherPage back={back}>
		<Example />
	</OtherPage>
));
