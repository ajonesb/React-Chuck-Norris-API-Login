import React from "react";
import app from "../base";
import PollDevices from "../components/pollDevices";

const Devices = () => {
  return (
    <div>
      <div className="container">
        <h1 className="text-center">Devices Online</h1>
        <PollDevices />
      </div>

      <div class="fixed-bottom mb-5">
        <button
          className="btn btn-primary btn-block"
          onClick={() => app.auth().signOut()}
        >
          Sign out
        </button>
      </div>
    </div>
  );
};

export default Devices;
