/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'


const firstbook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/510NuU01osL._AC_UL200_SR200,200_.jpg",
  author: 'Brené Brown',
  title: 'Atlas of the Heart: Mapping Meaningful'
}
const secondbook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/71xUvuJiqgL._AC_UL200_SR200,200_.jpg",
  author: 'Colleen Hoover',
  title: 'It Ends With Us: A Novel'
}

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        img={firstbook.img}
        title={firstbook.title}
        author={firstbook.author.toUpperCase()}
      />
      <Book
        img={secondbook.img}
        title={secondbook.title}
        author={secondbook.author}
      />

    </section>
  )
}

const Book = (props) => {
  console.log(props)

  return (
    <article className='book'>
      <img src={props.img} />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
      <p>{9 + 9}</p>
    </article>
  )

}


ReactDOM.render(<BookList />, document.getElementById('root'))

