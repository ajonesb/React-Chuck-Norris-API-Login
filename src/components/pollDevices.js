import React from "react";

class PollDevices extends React.Component {
  constructor() {
    super();

    this.state = {
      devices: "",
      email: "string",
      password: "string"
    };
  }

  componentDidMount() {
    this.getDevices();
    this.interval = setInterval(() => {
      this.getDevices();
    }, 5000);
  }

  getDevices() {
    // No device api with data so using sample api
    fetch("https://api.chucknorris.io/jokes/random")
      .then(response => response.json())
      .then(data => {
        this.setState({
          devices: data.value
        });
      });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <p>{this.state.devices}</p>;
  }
}

export default PollDevices;
