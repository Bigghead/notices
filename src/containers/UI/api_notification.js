import React, { Component } from 'react';
import { connect } from 'react-redux';

import './api-notification.css';


function mapStateToProps( { textTransform, notifications } ) {
    return {
        success   : notifications.success,
        error     : notifications.error,
        isLoading : textTransform.isLoading
    };
}


const renderNotice = ( success, error) => (
    <div id="toast" className={ success || error ? 'show': ''}>
        <div id="img">Icon</div>
        <div id="desc">{ 'Loading...'}</div>
    </div>
);


class API_Notification extends Component {
    render() {
        const { currentLetterCase, success, error, isLoading } = this.props;
        return (
            <div>
                { isLoading && 'Loading' }
                { renderNotice( success, error )}
            </div>
            
        );
    }
}

export default connect(
    mapStateToProps,
)(API_Notification);