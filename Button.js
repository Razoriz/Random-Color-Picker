import React from "react";

//Export the Button component and pass in the props.
export class Button extends React.Component {
  render() {
    return (
      <button
        className={this.props.light ? "light-button" : "dark-button"}
        onClick={this.props.onClick}
      >
        Refresh
      </button>
    );
  }
}
