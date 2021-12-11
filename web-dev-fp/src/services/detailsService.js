const URL = 'https://openlibrary.org/api';

export const findBook = () =>
    fetch(URL)
        .then(response => response.json());

export const findBookByISBNAPI = (isbn) =>
    fetch(`${URL}/books?bibkeys=ISBN:${isbn}&jscmd=details&format=json`)
        .then(response => response.json());

export const createBook = (book) =>
    fetch(URL, {
        method: 'POST',
        body: JSON.stringify(book),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());


export default {
    findBook, findBookByISBNAPI, createBook
};