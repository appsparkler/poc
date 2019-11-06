import React from "react";
import App from "../App.react";
import renderer from "react-test-renderer";

it("should render the expected HTML", () => {
  const component = renderer.create(<App />);
  const tree = component.toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <div
      className="App"
    >
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
    </div>
  `);
});
