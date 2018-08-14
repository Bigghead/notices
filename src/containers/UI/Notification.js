import React, { Component } from 'react';
import { connect } from 'react-redux';

import { RESET_NOTIFICATION, SUCCESS } from '../../store/notifications'

import './Notification.css';


function mapStateToProps( { textTransform: { isLoading }, notifications: { open, type, message } } ) {
    return {
        open,
        type,
        message
    };
}

const successStyle = { 'backgroundColor': 'lightgreen' };
const errorStyle   = { 'backgroundColor': '#cb2d3e' };


class Notification extends Component {


    dismissNotice = () => {
        this.props.dispatch( { type: RESET_NOTIFICATION } );
    }

    renderNotice = () => {
        const { open, type, message } = this.props;
        return (
            <div ref={ this.noticeRef }
                 id="toast" 
                 className={ open ? 'show' : '' } 
                 style={ type === SUCCESS  ? successStyle : errorStyle }>

                <div id="img">{ type === SUCCESS  ? 'OK' : 'Error:' }</div>

                <div id="desc">
                    {  message }
                    <button className="dismiss_button" onClick={ this.dismissNotice }>X</button>
                </div>
            </div>
        )
    };


    render() {
        return (
            <div>
                { this.renderNotice() }
            </div>
            
        );
    }
}

export default connect(
    mapStateToProps,
)(Notification);