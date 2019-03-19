// Types:
export const ADD_ETAGE = 'ADD_ETAGE';

// Action creators:
export const addEtage = function etages$addEtage(etage) {
	return { type: ADD_ETAGE, payload: { etage }}
};

// Selectors:
export const getEtageSlice = function etages$getEtageSlice(state) {
	return state.entities.etages;
};

export const getEtageMap = function etages$getEtageMap(state) {
	return getEtageSlice(state).map;
};

const defaultState = { counter: 0, map: {} };

// Reducer
export default function reducer(state = defaultState, { type, payload }) {
	switch (type) {
		// Adds an etage to the map by incrementing the counter.
		case ADD_ETAGE: {
			const index = state.counter + 1;

			return {
				...state,
				counter: index,
				map: { ...state.map, [index]: { id: index, etage: payload.etage } },
			};
		}
		default:
			return state;
	}
}
