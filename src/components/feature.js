/**
 * Created by reube on 20/07/2017.
 */

import  React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMessage } from '../actions';

class Feature extends Component {

    componentDidMount() {
        this.props.fetchMessage();
    }

    render() {
        return (
            <div>{this.props.message}</div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchMessage: () => dispatch(fetchMessage())
});

function mapStateToProps(state) {
    return { message: state.auth.message }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feature);