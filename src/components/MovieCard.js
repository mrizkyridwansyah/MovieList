import React from "react";
import Poster from "./Poster";

export default function MovieCard({ movie, openModal }) {
  return (
    <>
      <div
        className="card mx-3 my-3"
        style={{ width: "18rem", boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)" }}
      >
        <Poster Poster={movie.Poster} Title={movie.Title} />
        <div className="card-body">
          <h5 className="card-title">{movie.Title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{movie.Year}</h6>
          <a
            className="card-link"
            onClick={openModal}
            style={{ cursor: "pointer" }}
            data-id={movie.imdbID}
          >
            See Detail
          </a>
        </div>
      </div>
    </>
  );
}
