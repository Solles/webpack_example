import * as React from 'react';

export default function Example({ clouds, favorite, lastLike, onLike, onFavorite }) {
	return (
		<fieldset>
			<legend>Cloud likes</legend>
			<p>Last liked: {lastLike}</p>
			<table>
				<thead>
					<tr>
						<th>Cloud</th>
						<th>Etage</th>
						<th>Likes</th>
						<th></th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{clouds.map(({ id, cloud, etage, likes }) => (
						<tr key={id}>
							<td>{cloud}</td>
							<td>{etage}</td>
							<td>{likes}</td>
							<td>
								<button type="button" onClick={() => onLike(id)}>
									Like!
								</button>
							</td>
							<td>
								<button
									type="button"
									style={id === favorite ? { backgroundColor: 'green' } : {}}
									onClick={() => onFavorite(id)}
								>
									Favorite
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</fieldset>
	);
}
