import React, { Component } from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect';

import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import saga from './saga';
import reducer from './reducer';
import { makeSelectRouteNewsletter } from './selectors';
import {
  fetchNewsletter
} from './actions';
import {
  NEWSLETTER_FORM_CONTAINER_STATE_KEY
} from './constants';

class NewsletterFormContainer extends Component {

  static propTypes = {
    newsletterId: React.PropTypes.string.isRequired
  }

  componentWillMount() {
    console.log(`Newsletter id: ${this.props.newsletterId}`);
    if (this.props.newsletterId) {
      this.props.fetchNewsletter(this.props.newsletterId);
    }
  }

  render() {
    return (
      <h1>Newsletter Detail Page</h1>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchNewsletter: (newsletterId) => dispatch(fetchNewsletter(newsletterId))
});

const mapStateToProps = createStructuredSelector({
  newsletterId: makeSelectRouteNewsletter()
})

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: NEWSLETTER_FORM_CONTAINER_STATE_KEY, reducer });
const withSaga = injectSaga({ key: NEWSLETTER_FORM_CONTAINER_STATE_KEY, saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(NewsletterFormContainer);
