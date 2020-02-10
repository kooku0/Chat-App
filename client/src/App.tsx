import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { PAGE_PATHS } from './constants'
import Login from './pages/Signin'
import RoomList from './pages/RoomList'
import ChatRoom from './pages/ChatRoom'
import { connectServer } from './store/socketIO'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(connectServer('http://localhost:5000'))
  }, [])
  return (
    <div className="container-fluid h-100">
      <div className="row justify-content-center h-100">
        <Router>
          <Switch>
            <Route path={PAGE_PATHS.SIGNIN} component={Login} />
            <Route path={PAGE_PATHS.ROOM_LIST} component={RoomList} />
            <Route path={PAGE_PATHS.CHAT} component={ChatRoom} />
          </Switch>
          <Redirect from="/" to={PAGE_PATHS.SIGNIN} />
        </Router>
      </div>
    </div>
  )
}

export default App
