import {AUTH} from '../types/type';

export const AUTH_ACTION = (name, password)=> {
    return {
        type: AUTH,
        name: name,
        password: password
    }
}
