
import { combineReducers } from 'redux';
import entities from './entities';
import favorite from './favorite';
import lastLike from './lastLike';

export default combineReducers({ entities, favorite, lastLike });
