
import { getEtageMap } from './etages';

// Types:
export const LIKE_CLOUD = 'LIKE_CLOUD';
export const ADD_CLOUD = 'ADD_CLOUD';

// Action creators:
export const addCloud = function clouds$addCloud(cloud, etageId) {
	return { type: ADD_CLOUD, payload: { cloud, etageId } };
};

export const likeCloud = function (cloudId) {
	return { type: LIKE_CLOUD, payload: { cloudId } };
};

// Selectors:
export const getCloudSlice = function clouds$getClouds(state) {
	return state.entities.clouds;
};

/**
 * This selector would be an excellent candidate for memoization in the future using reselect.
 */
export const getCloudArray = function clouds$getCloud(state) {
	const map = getCloudSlice(state).map;
	const etageMap = getEtageMap(state);

	return Object.keys(map).map(id => {
		const cloud = map[id];
		return { ...cloud, etage: etageMap[cloud.etageId].etage };
	});
};

const defaultState = { counter: 0, map: {} };

// Slice reducer: This one reduces multiple actions.
export default function reducer(state = defaultState, { type, payload }) {
	switch (type) {
		// Adds a cloud to the map by incrementing the counter and using that index.
		case ADD_CLOUD: {
			const index = state.counter + 1;
			const { cloud, etageId } = payload;

			return {
				...state,
				counter: index,
				map: { ...state.map, [index]: { id: index, cloud, etageId, likes: 0 } },
			};
		}
		// Adds a like to an existing cloud.
		case LIKE_CLOUD: {
			const { map } = state;
			const { cloudId } = payload;
			const cloud = map[cloudId];

			return {
				...state,
				map: { ...map, [cloudId]: { ...cloud, likes: cloud.likes + 1 } }
			};
		}
		default:
			return state;
	}
}
