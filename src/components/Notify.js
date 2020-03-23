import React from "react";
import axios from "axios";

class NotifyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      isLoading: false
    };
    this.click = this.click.bind(this);
  }

  click() {
    this.setState({ isLoading: true });

    axios
      .post("http://35.201.2.209:8000/", {})
      .then(response => {
        this.setState({ data: response.data, isLoading: false });
      })
      .catch(err => {
        this.setState({ data: err, isLoading: false });
      });
  }

  render() {
    return (
      <div>
        <button
          className="button-notify btn btn-secondary btn-block"
          onClick={this.click}
          disabled={this.state.isLoading}
        >
          {" "}
          Notify{" "}
        </button>
        {this.state.data}
      </div>
    );
  }
}

export default NotifyComponent;
