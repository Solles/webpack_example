import * as React from 'react';

export default function HomePage({ urls }) {
	return (
		<div>
			<p>Welcome to the Webpack sample application!</p>
			<p>This application now uses React!</p>
			{urls.map(({ text, url }) => (
				<p key={url}>
					<a href={url}>
						{text}
					</a>
				</p>
			))}
		</div>
	);
}
