import React, { useEffect, useState } from 'react';

export default function ClickCounterFunction() {
	const [ count, setCount ] = useState(0);
	useEffect(() => { document.title = `Clicked ${count} times.`; });

	return [
		<div key="first">
			Clicked: {count} time(s).
		</div>,
		<div key="second">
			<button type="button" onClick={() => setCount(count + 1)}>
				Click to increment the counter!
			</button>
		</div>,
	];
}
