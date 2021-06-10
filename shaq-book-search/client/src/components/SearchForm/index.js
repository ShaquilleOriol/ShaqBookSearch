import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import BookCard from "../BookCard";
import Container from "../Container"

const SearchForm = () => {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);

  const fetchBooks = async (e) => {
    if (search.length < 3) return;
    e.preventDefault();
    const queryURL = `https://www.googleapis.com/books/v1/volumes?q=${search}`;
    const response = await fetch(queryURL);
    const payload = await response.json();
    setBooks(payload.items || []);
    setSearch("");
  };

  const postBooks = async (book) => {
    const queryURL = `/api/books`;
    const config = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    };
    const response = await fetch(queryURL, config);
    const payload = await response.json();
    return payload;
  };

  const saveBook = (book) => {
    const newSavedBook = {
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks
        ? book.volumeInfo.imageLinks.thumbnail
        : "https://picsum.photos/200/300",
      link: book.volumeInfo.previewLink,
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
    };
    postBooks(newSavedBook);
  };

  return (

    <Container>
      <Form>
        <h2>Book Search</h2>
        <Form.Control
          className="mb-2 mr-sm-2"
          placeholder="Enter author or title"
          size="lg"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button type="submit" className="mb-2" onClick={fetchBooks}>
          Search
        </Button>
      </Form>
      {books.length ? (
        <>
          <h5>Your Results</h5>
          <BookCard books={books} saveBook={saveBook} />
        </>
      ) : (
        <p>Your search results will appear below.</p>)}
    </Container>
  );
};

export default SearchForm;