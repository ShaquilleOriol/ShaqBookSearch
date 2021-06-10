import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

const BookCard = ({ books, saveBook }) => {
  return (
    <Container>
      <Row>
        <Col>
          {books.map((book) => (
            <Card key={book.id} style={{ width: "100%", flexDirection: "row" }}>
              <Card.Img className='col-xs-4 col-sm-3 col-md-3 col-lg-3' variant="top" src={book.volumeInfo.imageLinks
                ? book.volumeInfo.imageLinks.thumbnail
                : "https://picsum.photos/200/300"
              } />
              <Card.Body className='col-xs-8 col-sm-9 col-md-9 col-lg-9'>
                <Card.Title>{book.volumeInfo.title}</Card.Title>
                <Card.Text>
                  Written by:{" "}
                  {book.volumeInfo.authors &&
                    book.volumeInfo.authors.length > 1
                    ? book.volumeInfo.authors.join(", ")
                    : book.volumeInfo.authors}
                    {book.volumeInfo.description}
                    <small className="text-muted"><br></br>{book.volumeInfo.publishedDate}</small>
                </Card.Text>
                <Button variant="secondary" href={book.volumeInfo.previewLink}>View on Google Books</Button>{" "}
                <Button variant="success" onClick={() => saveBook(book)}>Save Book</Button>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default BookCard;