import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../state';

// apply type for useSelector
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;