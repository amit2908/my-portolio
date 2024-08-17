import React, { useContext } from 'react';
import PropTypes from 'prop-types'
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";
import R from '../res/index'
import NavContext from '../contexts/NavContext';
import ThemeContext from '../contexts/ThemeContext';

function Header({ title, handleMenuButtonClick }){
        const { theme } = useContext(ThemeContext);
        const menus = R.string.trans.menus
        const { navState, handleMenuSelection } = useContext(NavContext);
        const logo = R.image.logo
        return (
          <div className={theme === "light" ? "App-header-bg" : "App-header-bg-dark"}>
            <div className={theme === "light" ? "Header-title" : "Header-title-dark"}>
              <MenuIcon className="menu-icon" onClick={handleMenuButtonClick} />
              <img style={{ width: '12vw', padding: 10 }} src={logo}></img>
              {/* <span style={{ margin: 10 }}>{title}</span> */}
            </div>
            <header className="App-header">
              <nav className="App-header-link-bg">
                {menus.map((menu, i) => {
                  return (
                    <Link
                      key={menu.key}
                      onClick={() => handleMenuSelection(i)}
                      className={
                        i === navState ? (theme === "light" ? "Bubble-Out" : "Bubble-Out-Dark") : "Normal App-header-link"
                      }
                      to={menu.link}
                    >
                      {menu.title}
                    </Link>
                  );
                })}
              </nav>
            </header>
          </div>
        );
}

Header.propTypes = {
    handleMenuButtonClick: PropTypes.func,
    title: PropTypes.string
}


export default Header;