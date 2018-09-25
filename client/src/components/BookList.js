import React, { Component } from "react";
import { graphql } from "react-apollo";

import { getBooksQuery } from "../queries/queries";
import BookDitails from "./BookDitails";

class BookList extends Component {
  state = {
    selected: null
  };
  displayBooks() {
    const data = this.props.data;
    if (data.loading) {
      return <p>Loading books...</p>;
    } else {
      return data.books.map(book => (
        <li
          key={book.id}
          onClick={e => {
            this.setState({ selected: book.id });
          }}
        >
          {book.name}
        </li>
      ));
    }
  }
  render() {
    return (
      <div>
        <ul>{this.displayBooks()}</ul>
        <BookDitails bookId={this.state.selected} />
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
