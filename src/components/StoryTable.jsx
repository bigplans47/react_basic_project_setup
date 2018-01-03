import React from "react";
import ReactDOM from "react-dom";
import StoryCell from "./StoryCell"

class StoryTable extends React.Component {
  render() {
    const array = [];
    this.props.api.forEach((element, i) => {
      array.push(
        <StoryCell element={element} key={i} />
      );
    });
    console.log(array)
    return(
      // <table>
        <span>
          {array}
        </span>
      // </table>
    );


  }
}

export default StoryTable;
