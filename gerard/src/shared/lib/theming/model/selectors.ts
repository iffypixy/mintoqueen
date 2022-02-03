import {RootStore} from "@shared/lib/store";

const themingState = (state: RootStore) => state.theming;

export const theme = (state: RootStore) => themingState(state).theme;
