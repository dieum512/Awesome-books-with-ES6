import Book from './modules/book.js';
import Store from './modules/store.js';
import UI from './modules/UI.js';
import { DateTime } from './modules/time.js';

// display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// add a book
document.querySelector('.book-form').addEventListener('submit', (e) => {
  // prevent actual submit
  e.preventDefault();

  // gt the values of form
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  // instatiate book
  const book = new Book(title, author);

  // add book to the UI
  UI.addBook(book);

  // add book to store
  Store.addBook(book);

  // clear field
  UI.clearFields();
});

// remove book
document.querySelector('.table-body').addEventListener('click', (e) => {
  // remove book from UI
  UI.deleteBook(e.target);

  // remove book from store
  Store.removBook(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
});

// date
const currentDate = document.querySelector('.dateAndTime');

const dt = DateTime.local();
const newDate = dt.toLocaleString({
  month: 'long',
  day: 'numeric',
  year: 'numeric',
});

const newTime = dt.toLocaleString(DateTime.TIME_WITH_SECONDS);
currentDate.innerHTML = `
    <p>${newDate} &nbsp ${newTime}</p>
  `;

// navigation
const logo = document.querySelector('.logo');
const list = document.querySelector('.list-one');
const add = document.querySelector('.list-two');
const contact = document.querySelector('.list-three');
const showBooks = document.querySelector('.books');
const forms = document.querySelector('.forms');
const contactShow = document.querySelector('.contact');
logo.addEventListener('click', () => {
  showBooks.classList.remove('active');
  forms.classList.remove('active');
  contactShow.classList.remove('active');
});
list.addEventListener('click', () => {
  showBooks.classList.remove('active');
  forms.classList.remove('active');
  contactShow.classList.remove('active');
});
add.addEventListener('click', () => {
  showBooks.classList.add('active');
  forms.classList.add('active');
  contactShow.classList.remove('active');
});
contact.addEventListener('click', () => {
  showBooks.classList.add('active');
  forms.classList.remove('active');
  contactShow.classList.add('active');
});