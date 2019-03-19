
// Types:
export const SELECT_FAVORITE = 'SELECT_FAVORITE';

// Action Creators:
export const selectFavorite = function favorite$selectFavorite(cloudId) {
	return { type: SELECT_FAVORITE, payload: { cloudId } };
};

// Selector:
export const getFavorite = function favorite$getFavorite(state) {
	return state.favorite;
};

// Reducer
export default function reducer(state = null, { type, payload }) {
	switch (type) {
		// This emphasizes that we should be storing ids, not strings to other data in the store.
		case SELECT_FAVORITE:
			return payload.cloudId;
		default:
			return state;
	}
}
