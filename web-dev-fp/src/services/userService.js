const URL = 'https://thawing-brook-05000.herokuapp.com/rest/users';

export const findAllUsers = () =>
    fetch(URL)
        .then(response => response.json());

export const deleteUser = (id) =>
    fetch(`${URL}/${id}`, {
        method: 'DELETE',
    });
export const createUser = (user) =>
    fetch(URL, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());

export const registerUser = (user) =>
    fetch(`${URL}/register`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());

export const loginUser = (username, password) =>
    fetch(`${URL}/login/${username}/${password}`)
        .then(response => response.json());

export const findUserByUsername = (username) =>
    fetch(`${URL}/${username}`)
        .then(response => response.json());

export const addToRead = (user, isbn) =>
    fetch(`${URL}/${user._id}/to-read/add/${isbn}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());

export const addRead = (user, isbn) =>
    fetch(`${URL}/${user._id}/read/add/${isbn}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());

export const addCurrentlyReading = (user, isbn) =>
    fetch(`${URL}/${user._id}/current-read/add/${isbn}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());

export const deleteToRead = (user, isbn) =>
    fetch(`${URL}/${user._id}/to-read/remove/${isbn}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());

export const deleteRead = (user, isbn) =>
    fetch(`${URL}/${user._id}/read/remove/${isbn}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());

export const deleteCurrentlyReading = (user, isbn) =>
    fetch(`${URL}/${user._id}/current-read/remove/${isbn}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());


export default {
    findAllUsers, deleteUser, createUser, findUserByUsername,
    deleteCurrentlyReading, deleteRead, deleteToRead,
    addCurrentlyReading, addToRead, addRead, loginUser, registerUser
};

