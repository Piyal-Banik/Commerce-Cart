import {userActionTypes} from './user.types';

const INITIAL_STATE = {
    currentUser: null,
    token: null
};

const userReducer = (state=INITIAL_STATE, action) => {
    
    switch(action.type) {
        case userActionTypes.ADD_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload.user,
                token: action.payload.token
            };

        case userActionTypes.REMOVE_CURRENT_USER: 
            return {
                ...state,
                user: null,
                token: null
            };

        default: 
            return state;
    }
};

export default userReducer;