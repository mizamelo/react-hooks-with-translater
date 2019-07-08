import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Type & Action Creator */
const { Types, Creators } = createActions({
  mainRequest: [],
  mainSuccess: ["data"]
});

export const MainTypes = Types;
export default Creators;

/* Initial State */
const INITIAL_STATE = Immutable({
  loading: null,
  data: []
});

/* Reducers */
export const success = (state, { data }) =>
  state.merge({ loading: false, data });

export const request = state => state.merge({ loading: true });

/* Reducers to Types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.MAIN_SUCCESS]: success,
  [Types.MAIN_REQUEST]: request
});
