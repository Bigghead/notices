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

const successStyle = { 'backgroundColor': 'lightgreen' };
const errorStyle   = { 'backgroundColor': '#cb2d3e' };


class API_Notification extends Component {

    renderNotice = ( success, error) => {
        const { mode } = this.props;
        return (
            <div id="toast" 
                 className={ success || error ? 'show' : '' } 
                 style={ success ? successStyle : errorStyle }>
                <div id="img">{ success ? 'OK' : 'Error:' }</div>
                <div id="desc">
                    { success ? `Successfully loaded ${this.props.mode}` : `Error loading ${mode}` }
                </div>
            </div>
        )
    };


    render() {
        const { currentLetterCase, success, error, isLoading } = this.props;
        return (
            <div>
                { isLoading && 'Loading' }
                { this.renderNotice( success, error )}
            </div>
            
        );
    }
}

export default connect(
    mapStateToProps,
)(API_Notification);