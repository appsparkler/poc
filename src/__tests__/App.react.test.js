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
        </div>
      </div>
    </div>
  `);
});
