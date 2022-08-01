import React from "react";
import ReactDOM from "react-dom";
import { Button } from "./Button.js";

class Random extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: [15, 35, 150] };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      color: this.chooseColor(),
    });
  }
  componentDidMount() {
    this.applyColor();
  }

  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }
  //Format the color as a string.
  formatColor(ary) {
    return "rgb(" + ary.join(", ") + ")";
  }
  //Determine whether the background color should be light or dark.
  isLight() {
    const rgb = this.state.color;
    return rgb.reduce((a, b) => a + b) < 127 * 3;
  }
  //Apply the background color.
  applyColor() {
    const color = this.formatColor(this.state.color);
    document.body.style.background = color;
  }
  //Choose a random color.
  chooseColor() {
    const random = [];
    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random() * 256));
    }
    return random;
  }
  //Render the button and apply the background color.
  render() {
    return (
      <div>
        <h1 className={this.isLight() ? "white" : "black"}>
          {" "}
          Your color is {this.formatColor(this.state.color)}!
        </h1>
        <Button light={this.isLight()} onClick={this.handleClick} />
      </div>
    );
  }
}
//Render the Random component.
ReactDOM.render(<Random />, document.getElementById("app"));
