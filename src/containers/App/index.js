import React, { Component } from 'react';
import BookListItem from '../../components/BookListItem';

class App extends Component {
  constructor(){
    super();

    //initial state
    this.state = {
      books: [{title: "Halloween"}]
    }
  }

  addNewBook(bookTitle){
    let newBook = {
      title: bookTitle
    };

    this.setState({
      books: [...this.state.books, newBook]
    });
  }

  componentWillMount(){
    console.log(this.state.books);
  };

  componentDidMount() {
    console.log(this.state.books);
  }

  render() {
    return (
      <div className="App">
        <BookListItem books={this.state.books}/>
      </div>
    );
  }
}

export default App;
