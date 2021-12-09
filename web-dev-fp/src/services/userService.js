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

export const findUserByUsername = (username) =>
    fetch(`${URL}/${username}`)
        .then(response => response.json());

export const updateUser = (user) =>
    fetch(`${URL}/${user._id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());


export default {
    findAllUsers, deleteUser, createUser, findUserByUsername, updateUser
};

