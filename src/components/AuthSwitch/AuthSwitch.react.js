import React, {useContext} from 'react'
import {AuthContext} from '../../context/AuthContext.react'

function handleFormChange(toggleAuthenticated, evt) {
  toggleAuthenticated()
}

export default function() {
  const {isAuthenticated, toggleAuthenticated} = useContext(AuthContext)
  return (<form
    className="AuthSwitch border border-warning p-2"
    onChange={handleFormChange
        .bind(null, toggleAuthenticated)}
  >
    <h4>Auth Switch:</h4>
    <div className="form-check">
      <label className="form-check-label">
        <input
          className="form-check-input"
          type="radio"
          name="AuthStatus"
          value="true"
        />
          Yes
      </label>
    </div>
    <div className="form-check">
      <label className="form-check-label">
        <input
          className="form-check-input"
          type="radio"
          name="AuthStatus"
          value="false"
        />
          No
      </label>
    </div>
    <pre>Auth State: {isAuthenticated.toString()}</pre>
  </form>)
}
