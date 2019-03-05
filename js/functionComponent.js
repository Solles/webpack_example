import * as React from 'react';
import run from './common';
import OtherPage from './components/OtherPage';
import ClickerCounterFunction from './components/ClickerCounterFunction';

run(({ back }) => (
	<OtherPage back={back}>
		<ClickerCounterFunction />
	</OtherPage>
));
