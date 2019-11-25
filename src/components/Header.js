import React, { Component } from 'react'
import { NavLink  } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    }
  }

  toogleMenu = () => {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu
    }));
  }

  render() {
    return (
      <header>
        <div className={this.state.showMenu ? "menu-btn close" : "menu-btn"} onClick={this.toogleMenu}>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
        </div>

        <nav className={this.state.showMenu ? "menu show" : "menu"}>
          <div className={this.state.showMenu ? "menu-branding show" : "menu-branding"}>
            <div className="portrait"></div>
          </div>
          <ul className={this.state.showMenu ? "menu-nav show" : "menu-nav"}>
            <li className={this.state.showMenu ? "nav-item show" : "nav-item"} onClick={this.toogleMenu}>
              <NavLink  to='/' className="nav-link" activeClassName="current">Home</NavLink>
            </li>
            <li className={this.state.showMenu ? "nav-item show" : "nav-item"} onClick={this.toogleMenu}>
              <NavLink  to='/about' className="nav-link" activeClassName="current">About</NavLink>
            </li>
            <li className={this.state.showMenu ? "nav-item show" : "nav-item"} onClick={this.toogleMenu}>
              <NavLink  to='/contact' className="nav-link" activeClassName="current">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header