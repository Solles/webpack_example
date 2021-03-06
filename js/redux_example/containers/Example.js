import { connect } from 'react-redux';
import Example from '../components/Example';
import { getCloudArray, likeCloud } from '../reducers/entities/clouds';
import { getFavorite, selectFavorite } from '../reducers/favorite';
import { getLastLike } from '../reducers/lastLike';

export default connect(
	state => ({
		clouds: getCloudArray(state),
		favorite: getFavorite(state),
		lastLike: getLastLike(state),
	}),
	{ onLike: likeCloud, onFavorite: selectFavorite },
)(Example);
