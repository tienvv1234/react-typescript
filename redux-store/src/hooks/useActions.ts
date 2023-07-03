import { useDispatch } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { actionCreators } from '../state';

// general idea, we have used dispatch, the useDispatch function is only used to
// get access to the dispatch function itself, and that is the function that is a part of our reduce store
// it is what allow us to dispatch an action into all of our different reducers

export const useActions = () => {
    // step 1 - create a dispatch function
    const dispatch = useDispatch();
    // step 2 - bind the aciton the creators
    // bind to action is going to give us back an object that contains all the different action creators that
    // we provided in as the first argument, but now whenever we call these bound action creators, the return
    // value from them will be automatically taken and provided to dispatch 
    // some thing link 
    // { searchRepositories: dispatch(searchRepositories)}
    return bindActionCreators(actionCreators, dispatch);
}

// type Action = ReturnType<typeof useActions>;