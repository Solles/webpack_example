import { createStore } from 'redux';
import clouds from './data/clouds';
import etages from './data/etages';
import rootReducer from './reducers';
import { addCloud } from './reducers/entities/clouds';
import { addEtage, getEtageMap } from './reducers/entities/etages';

// Create the store
const store = createStore(rootReducer);

// Populate the store. We could use the second parameter of createStore, but I wanted to emphasize
// dispatching to the store.
etages.forEach(etage => store.dispatch(addEtage(etage)));
const etageMap = getEtageMap(store.getState());
const nameToIdMap = new Map();
Object.keys(etageMap).forEach((id) => { nameToIdMap.set(etageMap[id].etage, Number(id)); });
clouds.forEach(({ cloud, etage }) => store.dispatch(addCloud(cloud, nameToIdMap.get(etage))));

export default store;
