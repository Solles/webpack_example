import * as React from 'react';
import run from './common';
import OtherPage from './components/OtherPage';
import ClickerCounterClass from './components/ClickerCounterClass';

run(({ back }) => (
	<OtherPage back={back}>
		<ClickerCounterClass />
	</OtherPage>
));
