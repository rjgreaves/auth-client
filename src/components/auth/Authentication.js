/**
 * Created by reube on 20/07/2017.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectAuthenticated } from '../../containers/App/appSelectors';

// Higher Order Component
export default function(ComposedComponent) {
    class Authentication extends Component {

        static contextTypes = {
            router: React.PropTypes.object
        };

        componentWillMount() {
            if(!this.props.authenticated) {
                this.context.router.push('/');
            }
        }

        componentWillUpdate(nextProps) {
            if(!nextProps.authenticated) {
                this.context.router.push('/');
            }
        }

        render() {
            return <ComposedComponent {...this.props} />
        }
    }

    function mapStateToProps() {
        return createStructuredSelector({
            authenticated: makeSelectAuthenticated(),
          });
    }
    return connect(mapStateToProps)(Authentication);
}
// In some other location
// we want to use this HOC
/*

 import Authentication // This is the HOC
 import Resources // This is the component I want to wrap

 const ComposedComponent = Authentication(Resources);

 // In some render method
 <ComposedComponent resources=(resourceList)/>

 */