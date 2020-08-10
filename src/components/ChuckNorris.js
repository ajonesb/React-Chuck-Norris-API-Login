import React from "react";
import app from "../base";
import FetchChuckNorris from "./FetchChuckNorris";

const chuckNorris = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center">Chuck Noris API</h1>
            <FetchChuckNorris />
          </div>
        </div>
        <div className="buttons-container fixed-bottom row">
          <div className="col-md-12">
            <button
              className="button-signout mb-2 btn btn-primary btn-block"
              onClick={() => app.auth().signOut()}
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default chuckNorris;
