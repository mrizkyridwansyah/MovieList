import React, { useState, useRef, useEffect } from "react";
import TopBar from "./components/TopBar";
import MovieCard from "./components/MovieCard";
import axios from "axios";
import Detail from "./Detail";
import Loader from "./components/Loader";

export default function Home() {
  const [isLogin, setIsLogin] = useState(false);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [currentMovieId, setCurrentMovieId] = useState("");
  const keywordRef = useRef();

  function handleSearch(e) {
    e.preventDefault();
    setMovies([]);
    setLoading(true);
    setError("");
    axios
      .get(
        `https://www.omdbapi.com/?apikey=200f94e7&type=movie&s=${keywordRef.current.value}`
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.Response === "True") {
          setMovies(res.data.Search);
        } else {
          setError(res.data.Error);
        }
        setLoading(false);
      });
  }

  function openModal(e) {
    setShowModal(true);
    setCurrentMovieId(e.target.dataset.id);
  }

  useEffect(() => {
    setIsLogin(localStorage.getItem("isLogin") != null);
  }, []);

  return (
    <>
      <TopBar isLogin={isLogin} />
      <div className="container mt-4">
        <div className="row justify-content-md-center">
          <div className="col-md-8">
            <h2 className="text-center mb-4">Search Movies</h2>
            <form>
              <div className="form-row">
                <div className="col-md-10 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Movie Name .."
                    required
                    autoFocus
                    ref={keywordRef}
                    onKeyUp={(e) => e.key == "Enter" && handleSearch}
                  />
                </div>
                <div className="col-md-2 mb-3">
                  <button
                    className="btn btn-primary"
                    disabled={loading || !isLogin}
                    onClick={handleSearch}
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr />
      {error != "" && <h3 className="text-center mt-5">{error}</h3>}
      {!isLogin && (
        <h3 className="text-center mt-5">
          You must log in to watch the movie !
        </h3>
      )}
      {loading && <Loader />}
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {movies.length > 0 &&
          movies.map((movie) => {
            return (
              <MovieCard
                key={movie.imdbID}
                movie={movie}
                openModal={openModal}
              />
            );
          })}
      </div>

      <Detail
        show={showModal}
        movieId={currentMovieId}
        handleClose={() => {
          setShowModal(false);
          setCurrentMovieId("");
        }}
      />
    </>
  );
}
