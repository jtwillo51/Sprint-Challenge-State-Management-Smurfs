import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

// components
import SmurfList from "./smurfList";
import AddASmurf from "./addASmurf";

import { SmurfContext } from "../Context/SmurfContext";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => {
        console.log("data: ", res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <SmurfContext.Provider value={data}>
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <AddASmurf />
        <SmurfList />
      </div>
    </SmurfContext.Provider>
  );
}

export default App;
