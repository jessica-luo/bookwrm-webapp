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
        method: 'PUT',
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


export default {
    findAllAuthors, deleteAuthor, createAuthor, findAuthorByUsername, updateAuthor,
    registerAuthor, loginAuthor
};

