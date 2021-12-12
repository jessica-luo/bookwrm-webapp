import {Subject} from 'rxjs';

const subject = new Subject();

const initialState = {
    username: '',
    type: ''
};

let state = initialState

const loginStore = {
    init: () => {
        state = {...state, username: state.username, type: state.type}
        subject.next(state)
    },
    subscribe: setState => {
        subject.subscribe(setState)
    },
    login: user => {
        state = {
            ...state,
            username: user.username,
            type: user.type
        };
        subject.next(state)
    },
    logout: () => {
        state = initialState;
        subject.next(state);
    },
    initialState
}

export default loginStore;