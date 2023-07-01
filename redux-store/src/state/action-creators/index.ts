import axios from 'axios';
import { ActionType } from '../action-types';
import { Action } from '../actions';

export const searchRepositories = (term: string) => {
    // high order function
    return async (dispatch: any) => {
        // start dispatch an action
        dispatch({
            type: ActionType.SEARCH_REPOSITORIES
        });

        try {
            // make a request
            const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {
                params: {
                    text: term
                }
            });

            const names = data.objects.map((result: any) => {
                return result.package.name;
            });

            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
                payload: names
            });
        } catch (err) {
            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_ERROR,
                payload: string(err.message)
            });
        }
    };
}