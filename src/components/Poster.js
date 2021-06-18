import React from "react";

export default function Poster({ Poster, Title }) {
  //   const { Poster, Title } = props;
  console.log(Poster);
  return (
    <img
      src={Poster}
      className="card-img-top img-fluid"
      alt={Title}
      style={{ maxHeight: "350px", maxWidth: "285px" }}
    />
  );
}
