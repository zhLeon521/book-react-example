/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

import { books } from './booksData';
import { Book } from './Book';



const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} boook={book}></Book>
      })}

    </section>
  )
}



ReactDOM.render(<BookList />, document.getElementById('root'))

