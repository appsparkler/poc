import React from 'react'

const ProjectDetails = (props) => (
  <div className="project-details section container">
    <div className="card z-depth-0">
      <div className="card-content">
        <span className="card-title">
          Project {props.match.params.id} Title
        </span>
        <p>
          Tiramisu topping gummi bears gummi
           bears dragée. Sesame snaps soufflé
          jelly-o. Macaroon liquorice chocolate
           bar topping wafer jujubes toffee.
          Ice cream croissant cupcake pie halvah.
           Croissant pastry apple pie.
        </p>
      </div>
      {/* Author Details*/}
      <div className="card-action grey lighten-4 grey-text">
        <div>Posted By The Net Ninja</div>
        <div>2nd September, 2am</div>
      </div>
    </div>
  </div>
)

export default ProjectDetails
