import React, { Component } from 'react';

class NewBookForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titleInput: '',
      authorInput: ''
    }

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeAuthor = this.handleChangeAuthor.bind(this);

  }

  handleSubmit(event){
    event.preventDefault();

    let bookTitle = this.state.titleInput;
    let bookAuthor = this.state.authorInput;

    this.props.addNewBook(bookTitle, bookAuthor);

    this.setState({
      titleInput: '',
      authorInput: ''
    })

  }

  handleChangeTitle(event){
    this.setState({
      titleInput: event.target.value
    });
  }

  handleChangeAuthor(event){
    this.setState({
      authorInput: event.target.value
    });
  }

  //add methods
render(){
    return (
      <div>
        <h2>{this.props.quote}</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" placeholder="title" value={this.state.titleInput} onChange={this.handleChangeTitle.bind(this)}/>
          <input type="text" placeholder="author" value={this.state.authorInput} onChange={this.handleChangeAuthor.bind(this)}/>
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.titleInput}</p>
        <p>{this.state.authorInput}</p>
      </div>

    );
  }
};

export default NewBookForm;