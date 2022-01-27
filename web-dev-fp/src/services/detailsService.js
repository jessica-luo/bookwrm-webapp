const URL = 'https://openlibrary.org/api';

export const findBook = () =>
    fetch(URL)
        .then(response => response.json());

export const findBookByISBNAPI = (isbn) =>
    fetch(`${URL}/books?bibkeys=ISBN:${isbn}&jscmd=details&format=json`)
        .then(response => response.json());

export const findBookDataByISBNAPI = (isbn) =>
    fetch(`${URL}/books?bibkeys=ISBN:${isbn}&jscmd=data&format=json`)
        .then(response => response.json());

export const createBook = (book) =>
    fetch(URL, {
        method: 'POST',
        body: JSON.stringify(book),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());

const detailsService = {
    findBook, findBookByISBNAPI, createBook, findBookDataByISBNAPI
};

export default detailsService