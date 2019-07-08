import { put, call } from "redux-saga/effects";

import MainActions from "~/store/ducks/main";
import api from "~/services/api";

export function* load() {
  const response = yield call(api.get, "/users/mizamelo/repos");

  yield put(MainActions.mainSuccess(response.data));
}
