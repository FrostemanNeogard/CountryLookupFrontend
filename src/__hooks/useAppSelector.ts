import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from '../__redux/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector