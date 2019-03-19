
import { LIKE_CLOUD } from './entities/clouds';

// Selectors:
export const getLastLike = function lastLike$getLastLike(state) {
	return state.lastLike;
};

// Reducer:
export default function reducer(state = '', { type }) {
	switch (type) {
		// We're listening for an action from another reducer. This is completely acceptable
		// and even encouraged!
		case LIKE_CLOUD:
			return Date();
		default:
			return state;
	}
}
