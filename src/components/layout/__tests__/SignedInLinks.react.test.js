import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import SignedInLinks from "../SignedInLinks.react";

it("should render correctly", () => {
  expect.assertions(1);
  const component = renderer.create(
    <Router>
      <SignedInLinks />
    </Router>
  );
  const tree = component.toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <ul
      className="right"
    >
      <li>
        <a
          href="/"
          onClick={[Function]}
        >
          Create Project
        </a>
      </li>
      <li>
        <a
          href="/"
          onClick={[Function]}
        >
          Logout
        </a>
      </li>
      <li>
        <a
          className="btn btn-floating pink lighten-3"
          href="/"
          onClick={[Function]}
        >
          NN
        </a>
      </li>
    </ul>
  `);
});
