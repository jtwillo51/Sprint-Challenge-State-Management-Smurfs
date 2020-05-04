import React, { useContext } from "react";
import Smurf from "./smurf";
import { SmurfContext } from "../Context/SmurfContext";

function SmurfList() {
  const value = useContext(SmurfContext);
  console.log("value: ", value);
  return (
    <div className="smurfList">
      {value.map((smurf) => <Smurf smurf={smurf} key={smurf.id} />)}
    </div>
  );
}

export default SmurfList;
