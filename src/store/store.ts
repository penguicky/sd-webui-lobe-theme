import type { StateCreator } from 'zustand/vanilla';

import { type StoreAction, createSettings } from './action';
import { type StoreState, initialState } from './initialState';

export type Store = StoreAction & StoreState;

export const createStore: StateCreator<Store, [['zustand/devtools', never]]> = (...parameters) => ({
  ...initialState,
  ...createSettings(...parameters),
});
