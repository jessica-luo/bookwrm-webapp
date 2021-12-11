import {Subject} from 'rxjs';

const subject = new Subject();

const initialState = {
    username: ''
};

let state = initialState

const loginStore = {
    init: () => {
        state = {...state, username: ''}
        subject.next(state)
    },
    subscribe: setState => {
        console.log(setState)
        subject.subscribe(setState)
    },
    login: username => {
        state = {
            ...state,
            username: username
        };
        subject.next(state);
        console.log(state);
    },
    logout: () => {
        state = initialState;
        subject.next(state);
    },
    initialState
}

export default loginStore;