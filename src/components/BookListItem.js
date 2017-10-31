import React from 'react';

const BookListItem = ({title, author}) => {

  return (
    <div className="BookListItem">
      <div>
        <div>Book Title: { title }</div>
        <div>Book Author: { author }</div>
      </div>
    </div>
  );
}


export default BookListItem;