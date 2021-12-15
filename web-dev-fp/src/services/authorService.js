const URL = 'https://thawing-brook-05000.herokuapp.com/rest/authors';

export const findAllAuthors = () =>
    fetch(URL)
        .then(response => response.json());

export const deleteAuthor = (id) =>
    fetch(`${URL}/${id}`, {
        method: 'DELETE',
    });
export const createAuthor = (user) =>
    fetch(URL, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());

export const findAuthorByUsername = (username) =>
    fetch(`${URL}/${username}`)
        .then(response => response.json());

export const updateAuthor = (user) =>
    fetch(`${URL}/${user._id}`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());

export const registerAuthor = (user) =>
    fetch(`${URL}/register`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());

export const loginAuthor = (user) =>
    fetch(`${URL}/login`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })
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

export const findInToRead = (user, isbn) =>
    fetch(`${URL}/${user._id}/to-read/${isbn}`)
        .then(response => response.json());

export const findInRead = (user, isbn) =>
    fetch(`${URL}/${user._id}/read/${isbn}`)
        .then(response => response.json());

export const findInCurrentlyReading = (user, isbn) =>
    fetch(`${URL}/${user._id}/current-read/${isbn}`)
        .then(response => response.json());



export default {
    findAllAuthors, deleteAuthor, createAuthor, findAuthorByUsername, updateAuthor,
    registerAuthor, loginAuthor, addToRead, addRead, addCurrentlyReading,
    deleteToRead, deleteCurrentlyReading, deleteRead,
    findInToRead, findInCurrentlyReading, findInRead
};

