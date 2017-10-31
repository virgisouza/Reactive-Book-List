import React from 'react';
import BookListItem from '../../components/BookListItem';


const BookList = ({books}) => {

  return (
    <div className="BookList">
      {
      books.map((props, idx) => {
        return (
          <BookListItem title={props.title} author={props.author} key={idx}/>
        );
      })
    }
    </div>
  );
}
export default BookList;
