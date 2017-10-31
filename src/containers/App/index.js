import React, { Component } from 'react';
import BookFilterInput from '../../components/BookFilterInput';
import BookListAppTitle from '../../components/BookListAppTitle';
import NewBookForm from '../NewBookForm';
import { getBooksFromFakeXHR } from '../../lib/books.db';
import { getBookByIdFromFakeXHR } from '../../lib/books.db';
import { addBookToFakeXHR } from '../../lib/books.db';
import BookList from '../BookList';


class App extends Component {
  constructor(){
    super();

    //initial state
    this.state = {
      books: []
    }
  }

  addNewBook(bookTitle, bookAuthor){
    let newBook = {
      title: bookTitle,
      author: bookAuthor
    };

    addBookToFakeXHR(newBook)
    .then(addedBook => {
      console.log('addedBook', addedBook)
      return this.setState({
      books: [...this.state.books, newBook]
      });
    })
  }

  findBook(findBook) {
    getBookByIdFromFakeXHR(findBook)
    .then(foundBook => {
      console.log('foundBook', foundBook)
      return ;
    })
  }

  componentWillMount(){
    console.log('will mount',this.state.books);

  };

  componentDidMount() {
    console.log(this.state.books);
    getBooksFromFakeXHR()
    .then(response => {
      console.log("response",response);
      return response;
    })
    .then(fetchedData => {
      console.log('fetchedData',fetchedData);
      this.setState({books: fetchedData});
      console.log(this.state.books);
    })
    .catch(err => {
      console.log(err.toString());
    })

  };

  render() {
    return (
      <div className="App">
        <BookList books={this.state.books}/>
        <BookListAppTitle books={this.state.title}/>
        <NewBookForm
          quote="add new book herez"
          addNewBook={this.addNewBook.bind(this)}
        />

      </div>
    );
  }
}

export default App;
