import React, {useContext} from 'react'
import {AuthContext} from '../../context/AuthContext.react'

function handleFormChange(isAuthenticated, toggleAuthenticated, evt) {
  console.log(evt.currentTarget)
  const form = evt.currentTarget
  const fd = new FormData(form)
  console.log(fd.get('AuthStatus'))
}

export default function() {
  const {isAuthenticated, toggleAuthenticated} = useContext(AuthContext)
  // const [AuthStatus, setAuthStatus] = useState(isAuthenticated)
  return (<form
    className="AuthSwitch border border-warning p-2"
    onChange={handleFormChange
        .bind(null, isAuthenticated, toggleAuthenticated)}
  >
    <h4>Is Authenticated?</h4>
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
    <pre>Auth State: {isAuthenticated}</pre>
  </form>)
}
