import React from 'react';

const BookListAppTitle = ({title}) => {
  console.log('Book List App', title);

  return (
    <div className="BookListAppTitle">
      <div>Book List App Title: { title }</div>
    </div>
  );
}


//props.title

export default BookListAppTitle;