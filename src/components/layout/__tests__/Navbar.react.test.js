import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../Navbar.react";

it("should render the navbar correctly", () => {
  const component = renderer.create(
    <Router>
      <Navbar />
    </Router>
  );
  const tree = component.toJSON();
  expect.assertions(1);
  expect(tree).toMatchInlineSnapshot(`
    <div
      className="navbar-wrapper gray darken-3"
    >
      <div
        className="container"
      >
        <a
          className="brand-logo"
          href="/"
          onClick={[Function]}
        >
          MarioPlan
        </a>
        <ul
          className="right"
        >
          <a
            href="/"
            onClick={[Function]}
          >
            Create Project
          </a>
          <a
            href="/"
            onClick={[Function]}
          >
            Logout
          </a>
          <a
            className="btn btn-floating btn-pink"
            href="/"
            onClick={[Function]}
          >
            NN
          </a>
        </ul>
        <ul
          class="right"
        >
          <a
            href="/"
            onClick={[Function]}
          >
            Sign Up
          </a>
          <a
            href="/"
            onClick={[Function]}
          >
            Login
          </a>
        </ul>
      </div>
    </div>
  `);
});
