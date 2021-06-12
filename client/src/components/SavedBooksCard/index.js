import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

const SavedBookCard = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const queryURL = "/api/books";
    const fetchBooks = async () => {
      const response = await fetch(queryURL);
      const payload = await response.json();
      setBooks(payload || []);
    };
    fetchBooks();
  },[]);

  const deleteBook = async (id) => {
    setBooks(books.filter((book) => book._id !== id));
    const queryURL = `/api/books/${id}`;
    const config = {
      method: "DELETE",
    };
    const response = await fetch(queryURL, config);
    const payload = await response.json();
    return payload
  };

  return (
  <Container>
    <Row>
        <h4>Saved Books</h4>
        {books.length > 0 ? (
          books.map((book) => (
            <Card key={book._id} style={{ width: "100%", flexDirection: "row" }}>
              <Card.Img className='col-xs-4 col-sm-3 col-md-3 col-lg-3' variant="top" src={ book.image ? book.image : "https://picsum.photos/200/300"} />
              <Card.Body className='col-xs-8 col-sm-9 col-md-9 col-lg-9'>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>
                  Written by:{" "}
                  {book.authors && book.authors.length > 1
                  ? book.authors.join(", ") : book.authors}
                    {book.description}
                </Card.Text>
                <Button variant="secondary" href={book.link}>View on Google Books</Button>{" "}
                <Button variant="danger" onClick={() => deleteBook(book._id)}>delete book</Button>
              </Card.Body>
            </Card>
          ))
        ) : (
            <p>Looks like you haven't saved any books yet. When you save your favourite books they will appear here.</p>
            )}
    </Row>
  </Container>
  );
};

export default SavedBookCard;