export const SUCCESS  = 'SUCCESS';
export const ERROR    = 'ERROR';
export const RESET_NOTIFICATION = 'RESET_NOTIFICATION';


const initialState = {
    type   : '',
    message: '',
    open   : false
};


export const generateNotice = ( type, message  ) => dispatch => {
    dispatch( { type, payload: message } );
}


export default function notifications( state = initialState, { type, payload } ) {

    switch( type ){

        case RESET_NOTIFICATION:
            return initialState;

        case SUCCESS: 
            return { ...state, open: true, type, message: payload };

        case ERROR:
            return { ...state, open: true, type, message: payload };

        default: return state;
    }

}