import {AUTH} from '../types/type';
import{bake_cookie, read_cookie} from 'sfcookies';

const initialState = {
    email: 'raedshihab92@gmail.com',
    password: 'raed1992'
}
export const reducer = (state='k', action)=> {
    let newState = '';
    state = read_cookie('newState');
    console.log('reducer working');
    if(action.type === AUTH && action.name === initialState.email && action.password === initialState.password) {
        console.log('SUCSSES')
        newState = 'SUCSSES';
        bake_cookie('newState', newState)
        return newState
    }
     if (action.type === AUTH && action.name !== initialState.name) {
        console.log('Failed')
        newState = 'FAILED';
        bake_cookie('newState', newState)
        return state
    }
    else {
        return state
    }
}
