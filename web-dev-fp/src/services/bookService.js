const URL = 'https://thawing-brook-05000.herokuapp.com/rest/books';

export const findAllBooks = () =>
    fetch(URL)
        .then(response => response.json());

export const findBookByISBN = (isbn) =>
    fetch(`${URL}/${isbn}`)
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
    findAllBooks, findBookByISBN, createBook
};

