import React from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Error } from "./components/Error";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { data: "" };
  //   this.fetchData = this.fetchData.bind(this);
  // }

  state = {
    data: "",
  };

  // always fetch data here.
  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch("https://www.tronalddump.io/random/quote")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => this.setState({ data: data }));
  };

  render() {
    if (this.state.data.error) return <Error />;

    return (
      <div>
        <h1>Hello world</h1>
        <Button fetchData={this.fetchData} />
        <p>{this.state.data && this.state.data.value}</p>
      </div>
    );
  }
}

export default App;
