import React from "react";
import ReactDOM from "react-dom";
import FormInput from "./FormInput";
import renderer from "react-test-renderer";

describe("FormInput Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(< FormInput />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const tree = renderer
      .create(<FormInput/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})
