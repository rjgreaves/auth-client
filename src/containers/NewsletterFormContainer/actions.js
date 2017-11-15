import {
  FETCH_NEWSLETTER
} from './constants';

export function fetchNewsletter(newsletterId) {
  return {
    type: FETCH_NEWSLETTER,
    payload: newsletterId
  };
}