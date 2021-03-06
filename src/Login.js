import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";

export default function Login() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    setError("");
    setLoading(true);
    if (
      usernameRef.current.value == "rizky" &&
      passwordRef.current.value == "123"
    ) {
      localStorage.setItem("isLogin", true);
      localStorage.setItem("name", "Rizky");
      history.push("/");
    } else {
      setError("Incorrect username & password");
    }
    setLoading(false);
  }

  return (
    <>
      <div className="d-flex align-items-center justify-content-center mt-5">
        <div
          className="card w-100 mt-5"
          style={{ maxWidth: "400px", boxShadow: "5px 5px 5px #0062cc" }}
        >
          <div className="card-body">
            <h2 className="text-center mt-3">Log In</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Username</label>
                <input
                  className="form-control"
                  type="text"
                  ref={usernameRef}
                  required
                  autoFocus={true}
                />
                <label className="form-label">Password</label>
                <input
                  className="form-control"
                  type="password"
                  ref={passwordRef}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={loading}
              >
                {loading && (
                  <span
                    className="spinner-border spinner-border-sm mr-3"
                    role="status"
                    aria-hidden="true"
                  ></span>
                )}
                {!loading ? "Log In" : "Loading..."}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
