const UPPERCASE   = 'uppercase'
const LOWERCASE   = 'lowercase'
const API_SUCCESS = 'API_SUCCESS';
const API_ERROR   = 'API_ERROR';


const initialState = {
    currentLetterCase: 'lowercase',
    success          : null,
    error            : null
};


export const generateNotice = ( noticeType, message  ) => dispatch => {
    const type = noticeType === 'success' ? API_SUCCESS : API_ERROR;
    dispatch( { type, payload: message } );
}


export default function notifications( state = initialState, action ) {

    switch( action.type ) {

        case UPPERCASE: 
            return { state, currentLetterCase: UPPERCASE }

        case LOWERCASE:
            return { state, currentLetterCase: LOWERCASE }

        case API_SUCCESS: 
            return { state, success: true }

        case API_ERROR:
            return { state, error: action.payload }

        default: return state;
    }

}