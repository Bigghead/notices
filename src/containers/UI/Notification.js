import React, { Component } from 'react';
import { connect } from 'react-redux';

import { RESET_NOTIFICATION } from '../../store/notifications'

import './Notification.css';


function mapStateToProps( { textTransform: { isLoading }, notifications: { success, error } } ) {
    return {
        success,
        error,
        isLoading
    };
}

const successStyle = { 'backgroundColor': 'lightgreen' };
const errorStyle   = { 'backgroundColor': '#cb2d3e' };


class Notification extends Component {

    constructor(props) {
        super(props);
        // === Need to reset the notice from other page === //
        this.props.dispatch( { type: RESET_NOTIFICATION } )
    }

    componentDidMount() {
        this.noticeRef = React.createRef();
    }

    dismissNotice = () => {
        this.noticeRef.current.className = '';
    }

    renderNotice = ( success, error) => {
        const { mode } = this.props;
        return (
            <div ref={ this.noticeRef }
                 id="toast" 
                 className={ success || error ? 'show' : '' } 
                 style={ success ? successStyle : errorStyle }>

                <div id="img">{ success ? 'OK' : 'Error:' }</div>

                <div id="desc">
                    { success ? `Successfully loaded ${this.props.mode}` : `Error loading ${mode}` }
                    <button className="dismiss_button" onClick={ this.dismissNotice }>X</button>
                </div>
            </div>
        )
    };


    render() {
        const { success, error, isLoading } = this.props;
        return (
            <div>
                { isLoading && 'Loading ... ' }
                { this.renderNotice( success, error ) }
            </div>
            
        );
    }
}

export default connect(
    mapStateToProps,
)(Notification);