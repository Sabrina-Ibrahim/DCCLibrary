import React, { Component } from "react";
import "./App.css";
import TitleBar from "./TitleBar/TitleBar";
import BookViewer from "./BookViewer/BookViewer";

class App extends Component {
  constructor(props) {
    super(props);
    this.books = [
      { title: "You are a Badass", author: "Jen Sincero" },
      { title: "Think and Grow Rich", author: "Napoleon Hill" },
      { title: "When We Left Cuba", author: "Chanel Cleeton" },
    ];
    this.state = {
      bookNumber: 0,
    };
  }

  goToNextBook = () => {
    let tempBookNumber = this.state.bookNumber;
    tempBookNumber++;
    if (tempBookNumber === this.books.length) {
      tempBookNumber = 0;
    }
    this.setState({
      bookNumber: tempBookNumber,
    });
  };

  goToPreviousBook = () => {
    let tempBookNumber = this.state.bookNumber;
    tempBookNumber--;
    if (tempBookNumber < 0) {
      tempBookNumber = this.books.length - 1;
    }
    this.setState({
      bookNumber: tempBookNumber,
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <TitleBar />
        <BookViewer
          book={this.books[this.state.bookNumber]}
          nextBook={this.goToNextBook}
          previousBook={this.goToPreviousBook}
        />
      </div>
    );
  }
}

export default App;
