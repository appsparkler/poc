import React from "react";
import renderer from "react-test-renderer";
import Dashboard from "../Dashboard.react";

it("should render as expected", () => {
  const component = renderer.create(<Dashboard />);
  const tree = component.toJSON();
  expect.assertions(1);
  expect(tree).toMatchInlineSnapshot(`
    <div
      className="dashboard container"
    >
      <div
        className="row"
      >
        <div
          className="col s12 m6"
        >
          Project List
        </div>
        <div
          className="col s12 m5 offset-m1"
        >
          <div>
            <p>
              Notifications
            </p>
          </div>
        </div>
      </div>
    </div>
  `);
});
