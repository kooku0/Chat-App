import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { PAGE_PATHS } from './constants'
import Login from './pages/Signin'
import RoomList from './pages/RoomList'

const App = () => {
  return (
    <div className="container-fluid h-100">
      <div className="row justify-content-center h-100">
        <Router>
          <Switch>
            <Route path={PAGE_PATHS.SIGNIN} component={Login} />
            <Route path={PAGE_PATHS.ROOM_LIST} component={RoomList} />
          </Switch>
          <Redirect from="/" to={PAGE_PATHS.CHAT} />
        </Router>
      </div>
    </div>
  )
}

export default App
