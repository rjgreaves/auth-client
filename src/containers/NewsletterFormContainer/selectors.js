import { createSelector } from 'reselect';

import {
  NEWSLETTER_FORM_CONTAINER_STATE_KEY
} from './constants';

const selectNewsletterForm = (state) => state.get(NEWSLETTER_FORM_CONTAINER_STATE_KEY);

const makeSelectRouteNewsletter = () => (state, props) =>
  props.params.newsletterId;

const makeSelectNewsletterId = () => createSelector(
  selectNewsletterForm,
  (state) => state.get('newsletterId')
);
  
const selectNewsletterFormContainer = () => createSelector(
  selectNewsletterForm(),
  makeSelectRouteNewsletter(),
  (substate, newsletterId) => Object.assign(substate.toJS(), { newsletterId })
);
  
export {
  selectNewsletterForm,
  makeSelectRouteNewsletter,
  makeSelectNewsletterId,
  selectNewsletterFormContainer
};