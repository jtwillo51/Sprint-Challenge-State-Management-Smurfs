import React from "react";
import axios from "axios";

class AddASmurf extends React.Component {
  state = {
    name: "",
    age: "",
    height: "",
  };

  handleSubmit = (e) => {
    

    const newSmurf = { ...this.state, id: Date.now() };
    console.log("newSmurf: ", newSmurf)

    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then((res) => {
        console.log("PostIt: ", res.data);
      })
      .catch((err) => console.log(err));
  };

  handleChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="age"
            placeholder="age"
            value={this.state.age}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="height"
            placeholder="height"
            value={this.state.height}
            onChange={this.handleChange}
          />
          <button type="submit" >Add the Smurf</button>
        </form>
      </div>
    );
  }
}

export default AddASmurf;
