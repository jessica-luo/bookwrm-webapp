const URL = 'https://thawing-brook-05000.herokuapp.com/rest/author-data';

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

export const findAuthorByName = (name) =>
    fetch(`${URL}/${name}`)
        .then(response => response.json());


export default {
    findAllAuthors, deleteAuthor, createAuthor, findAuthorByName
};

