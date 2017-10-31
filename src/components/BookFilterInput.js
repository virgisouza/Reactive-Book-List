import React from 'react';

const BookFilterInput = ({title}) => {


  return (
      <div className="BookFilterInput">
        <form onSubmit="">
           <input type="text" placeholder="title" onChange={filter}/>
           <input type="text" placeholder="author" onChange={filter}/>
          <button type="submit">Filter</button>
        </form>
      </div>
    );
}

export default BookFilterInput;

