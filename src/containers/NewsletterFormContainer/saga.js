import { select, takeLatest, put, call } from 'redux-saga/effects';
// import { push } from 'react-router-redux';

import { fetchNewsletter } from '../../api/newsletterApi';
import { FETCH_NEWSLETTER } from './constants';
import { makeSelectNewsletterId} from './selectors';

export function* fetchNewsletterSaga({ payload }) {
  const newsletterId = yield select(makeSelectNewsletterId());
  try {
    const response = yield call(fetchNewsletter, newsletterId);
    console.log(response.message);
  } catch (err) {
    console.log(err);
  }
}

export default function* rootSaga() {
  yield [
    takeLatest(FETCH_NEWSLETTER, fetchNewsletterSaga)
  ]
}
