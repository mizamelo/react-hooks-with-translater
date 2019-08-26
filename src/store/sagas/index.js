import { all, takeLatest } from 'redux-saga/effects';

/** Sagas */
import { load } from '~/store/sagas/main';

/** Actions Types */
import { MainTypes } from '~/store/ducks/main';

export default function* rootSagas() {
  return yield all([takeLatest(MainTypes.MAIN_REQUEST, load)]);
}
