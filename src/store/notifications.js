const UPPERCASE   = 'uppercase'
const LOWERCASE   = 'lowercase'
const API_SUCCESS = 'API_SUCCESS';
const API_ERROR   = 'API_ERROR';


const initialState = {
    currentLetterCase: 'lowercase',
    success          : null,
    error            : null
};


export default function notifications( state = initialState, action ) {

    switch( action.type ) {

        case UPPERCASE: 
            return { ...this.state, currentLetterCase: UPPERCASE }

        case LOWERCASE:
            return { ...this.state, currentLetterCase: LOWERCASE }

        case API_SUCCESS: 
            return { ...this.state, success: 'OK' }

        case API_ERROR:
            return { ...this.state, error: action.payload }

        default: return state;
    }

}