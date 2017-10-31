import React from 'react';

const BookFilterInput = ({title}) => {


  return (
      <div className="BookFilterInput">
        <form onSubmit="">
          <input type="text" placeholder="title" onChange={}/>
          <input type="text" placeholder="author" onChange={}/>
          <button type="submit">Filter</button>
        </form>
      </div>
    );
}

export default BookFilterInput;

