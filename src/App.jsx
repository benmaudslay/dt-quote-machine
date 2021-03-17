import React, { useState, useEffect } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Error } from "./components/Error";

const App = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://www.tronalddump.io/random/quote")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => setData(data));
  };

  if (data.error) return <Error />;

  return (
    <div>
      <h1>Hello world</h1>
      <Button fetchData={fetchData} />
      <p>{data && data.value}</p>
    </div>
  );
};

export default App;
