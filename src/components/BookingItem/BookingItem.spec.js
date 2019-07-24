import React from "react";
import ReactDOM from "react-dom";
import BookingItem from "./BookingItem";
import renderer from "react-test-renderer";

describe("BookingItem Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(< BookingItem />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const tree = renderer
      .create(<BookingItem/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})
