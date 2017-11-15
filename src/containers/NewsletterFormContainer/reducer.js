import { fromJS } from 'immutable';

import { 
  FETCH_NEWSLETTER
} from './constants';

const initialState = fromJS({
  newsletterId: null
});

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_NEWSLETTER:
      return state.set('newsletterId', action.payload);
    default:
      return state;
  }
}
