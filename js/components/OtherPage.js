import * as React from 'react';

export default function OtherPage({ back, children }) {
	return (
		<div>
			<p>
				<a href={back}>
					Back to index
				</a>
			</p>
			{children}
		</div>
	);
}
