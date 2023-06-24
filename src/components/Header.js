import React, { useContext } from 'react';
import PropTypes from 'prop-types'
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";
import R from '../res/index'
import NavContext from '../contexts/NavContext';

function Header({ title, handleMenuButtonClick }){
        const menus = R.string.trans.menus
        const { navState, handleMenuSelection } = useContext(NavContext);

        return (
          <div className="App-header-bg">
            <div className="Header-title">
              <MenuIcon className="menu-icon" onClick={handleMenuButtonClick} />
              <span style={{ margin: 10 }}>{title}</span>
            </div>
            <header className="App-header">
              <nav className="App-header-link-bg">
                {menus.map((menu, i) => {
                  return (
                    <Link
                      key={menu.key}
                      onClick={() => handleMenuSelection(i)}
                      className={
                        i === navState ? "Bubble-Out" : "Normal App-header-link"
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