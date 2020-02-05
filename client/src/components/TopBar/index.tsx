import * as React from 'react'
import LogoImage from '../../assets/logo-basic.svg'

function TopBar() {
  return (
    <nav className="navbar nav-global nav-global-sign navbar-expand-sm">
      <div className="container d-flex justify-content-center">
        {/* <Link to={'/'}> */}
        <img className="img-brand" alt="Chat App" width="132" src={LogoImage} />
        {/* </Link> */}
      </div>
    </nav>
  )
}

export default TopBar
