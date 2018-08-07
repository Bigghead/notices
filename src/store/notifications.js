export const API_SUCCESS        = 'API_SUCCESS';
export const API_ERROR          = 'API_ERROR';
export const RESET_NOTIFICATION = 'RESET_NOTIFICATION';


const initialState = {
    success : null,
    error   : null
};


export const generateNotice = ( noticeType, message  ) => dispatch => {
    const type = noticeType === 'success' ? API_SUCCESS : API_ERROR;
    dispatch( { type, payload: message } );
}


export default function notifications( state = initialState, action ) {

    switch( action.type ){

        case RESET_NOTIFICATION:
            return { success: null, error: null }

        case API_SUCCESS: 
            return { state, success: true }

        case API_ERROR:
            return { state, error: action.payload }

        default: return state;
    }

}