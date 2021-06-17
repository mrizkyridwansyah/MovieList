import React from "react";

export default function Loader() {
  return (
    <>
      <div className="loader-body text-center">
        <div
          className="spinner-grow text-primary mx-3 mt-5"
          role="status"
          style={{ width: "1.5em", height: "1.5em" }}
        ></div>
        <div
          className="spinner-grow text-primary mx-3"
          role="status"
          style={{ width: "1.5em", height: "1.5em" }}
        ></div>
        <div
          className="spinner-grow text-primary mx-3"
          role="status"
          style={{ width: "1.5em", height: "1.5em" }}
        ></div>
      </div>
    </>
  );
}
