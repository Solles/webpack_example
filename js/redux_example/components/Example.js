
import * as React from 'react';
import store from '../store';
import { getCloudArray, likeCloud } from '../reducers/entities/clouds';
import { getFavorite, selectFavorite } from '../reducers/favorite';
import { getLastLike } from '../reducers/lastLike';

const getNewState = function Example$getNewState() {
	const state = store.getState();

	return {
		clouds: getCloudArray(state),
		favorite: getFavorite(state),
		lastLike: getLastLike(state),
	};
};

/**
 * This is not how one would do this in a "real" React-Redux application. Instead, react-redux or
 * some other binding library would be used to create a container. This shouldn't be used as a guide
 * for how to use React with Redux but to instead understand dispatching and state modifications.
 * In other words, React is a tool for this demonstration, not part of the demonstration.
 */
export default class Example extends React.PureComponent{
	state = getNewState();

	componentDidMount() { store.subscribe(() => { this.setState(getNewState()); }); }

	render() {
		const { clouds, favorite, lastLike } = this.state;
		console.log(store.getState());

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
									<button
										type="button"
										onClick={() => store.dispatch(likeCloud(id))}
									>
										Like!
									</button>
								</td>
								<td>
									<button
										type="button"
										style={id === favorite ? { backgroundColor: 'green' } : {}}
										onClick={() => store.dispatch(selectFavorite(id))}
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
}
