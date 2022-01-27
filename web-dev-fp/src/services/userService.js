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

export const loginUser = (user) =>
    fetch(`${URL}/login`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());

export const findUserByUsername = (username) =>
    fetch(`${URL}/username/${username}`)
        .then(response => response.json());

export const addToRead = (user, book) =>
    fetch(`${URL}/${user._id}/to-read/add`, {
        method: 'PUT',
        body: JSON.stringify(book),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());

export const addRead = (user, book) =>
    fetch(`${URL}/${user._id}/read/add`, {
        method: 'PUT',
        body: JSON.stringify(book),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());

export const addCurrentlyReading = (user, book) =>
    fetch(`${URL}/${user._id}/current-read/add`, {
        method: 'PUT',
        body: JSON.stringify(book),
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

export const updateUser = (user) =>
    fetch(`${URL}/${user._id}`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => console.log("aaaa", res));

export const findInToRead = (user, isbn) =>
    fetch(`${URL}/${user._id}/to-read/${isbn}`)
        .then(response => response.json());

export const findInRead = (user, isbn) =>
    fetch(`${URL}/${user._id}/read/${isbn}`)
        .then(response => response.json());

export const findInCurrentlyReading = (user, isbn) =>
    fetch(`${URL}/${user._id}/current-read/${isbn}`)
        .then(response => response.json());

export const addFriend = (id, username) =>
    fetch(`${URL}/${id}/add-friend/${username}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());

const userService = {
    findAllUsers, deleteUser, createUser, findUserByUsername,
    deleteCurrentlyReading, deleteRead, deleteToRead,
    addCurrentlyReading, addToRead, addRead, loginUser, registerUser, updateUser,
    findInRead, findInCurrentlyReading, findInToRead, addFriend
};

export default userService

