import React from 'react'
import { NavLink } from 'react-router-dom'
import { logout } from '../actions'
import { connect } from 'react-redux'
import logo from '../assets/lambdalogo.svg'
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'
import '../styles/nav.css'

class Nav extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownOpen: false
    }
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }))
  }

  onLogout = e => {
    e.preventDefault()
    this.props.logout()
  }

  render() {
    return (
      <nav>
        <img src={logo} alt="logo" />
        {this.props.location.pathname !== '/' &&
        this.props.location.pathname !== '/login' ? (
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav className="dropdown" color="white">
              ≡
            </DropdownToggle>
            <DropdownMenu className="dropmenu">
              <DropdownItem>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink to="/add-project">Add a Project</NavLink>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <NavLink to="/account">Account Settings</NavLink>
              </DropdownItem>
              <DropdownItem>
                <p onClick={this.onLogout}>Log Out</p>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : null}
      </nav>
    )
  }
}

export default connect(
  null,
  { logout }
)(Nav)
