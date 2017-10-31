import React from 'react';
import booksFromFakeDB from '../lib/books.db';

const BookListItem = ({title}) => {

  return (
    <div className="BookListItem">
      <div>Book List Item: { title }</div>
    </div>
  );
}


export default BookListItem;