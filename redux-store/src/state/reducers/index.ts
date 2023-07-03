import { combineReducers } from 'redux';
import repositoriesReducer from './repositoriesReducer';

const reducers = combineReducers({
    repositories: repositoriesReducer
});

export default reducers;

// this is the type definition for the entire state object inside of our redux store
export type RootState = ReturnType<typeof reducers>