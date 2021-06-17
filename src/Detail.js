import React, { useEffect, useState } from "react";
import {
  Modal,
  Button,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import axios from "axios";
import Poster from "./components/Poster";
import Loader from "./components/Loader";

export default function Detail(props) {
  const { handleClose, show, movieId } = props;
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setMovie({});
    setLoading(true);
    setError("");
    axios
      .get(`https://www.omdbapi.com/?apikey=200f94e7&type=movie&i=${movieId}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.Response === "True") {
          setMovie(res.data);
        } else {
          setError(res.data.Error);
        }
        setLoading(false);
      });
  }, [movieId]);

  return (
    <>
      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>
            <h3>{movie.Title}</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loading ? (
            <Loader />
          ) : (
            <div className="container-fluid">
              <Row>
                <Col md="4">
                  <Poster Poster={movie.Poster} Title={movie.Title} />
                </Col>
                <Col md="8">
                  <ListGroup>
                    <ListGroup.Item>{movie.Plot}</ListGroup.Item>
                    <ListGroup.Item>Released : {movie.Released}</ListGroup.Item>
                    <ListGroup.Item>Genre : {movie.Genre}</ListGroup.Item>
                    <ListGroup.Item>Actors : {movie.Actors}</ListGroup.Item>
                    <ListGroup.Item>Director : {movie.Director}</ListGroup.Item>
                    <ListGroup.Item>Writer : {movie.Writer}</ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Watch Now !
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
