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
    <nav>
      <div
        className="nav-wrapper grey darken-3"
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
          <ul
            class="right"
          >
            <li>
              <a
                href="/"
                onClick={[Function]}
              >
                Sign Up
              </a>
            </li>
            <li>
              <a
                href="/"
                onClick={[Function]}
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `);
});
