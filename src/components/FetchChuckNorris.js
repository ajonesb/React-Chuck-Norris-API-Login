import React from "react";

class FetchChuckNorris extends React.Component {
  _isMounted = false;
  constructor() {
    super();

    this.state = {
      devices: "",
      email: "string",
      password: "string",
    };
  }

  componentDidMount() {
    this._isMounted = true;
    this.getChuckNorrisQuotes();
    this.interval = setInterval(() => {
      this.getChuckNorrisQuotes();
    }, 7000);
  }

  getChuckNorrisQuotes() {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          devices: data.value,
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

export default FetchChuckNorris;
