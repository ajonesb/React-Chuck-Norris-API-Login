import React from "react";
import app from "../base";
import PollDevices from "../components/pollDevices";
import Notify from "../components/Notify";

const Devices = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center">Devices Online</h1>
            <PollDevices />
          </div>
        </div>
        <div className="buttons-container fixed-bottom row">
          <div className="col-md-12">
            <button
              className="button-signout mb-2 btn btn-primary btn-block"
              onClick={() => app.auth().signOut()}
            >
              Sign out
            </button>
            <Notify />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Devices;
