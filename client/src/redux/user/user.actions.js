import {userActionTypes} from './user.types';

export const addCurrentUser = user => ({
    type: userActionTypes.ADD_CURRENT_USER,
    payload: user
});

export const removeCurrentUser = user => ({
    type: userActionTypes.REMOVE_CURRENT_USER
});