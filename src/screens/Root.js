import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import NavContext from '../contexts/NavContext';

const Root = () => {
  const [sideBarHidden, setSideBarHidden] = useState(true)

  return (
    <div style={{ flexDirection: "column", justifyContent: "space-between" }}>
      <div>
        <Header
          title="Curious Coder"
          handleMenuButtonClick={() => setSideBarHidden(!sideBarHidden)}
        />

        <SideBar
          id="SideBar-bg"
          handleMenuSelection={(index) => {
            console.log(index)
            setSideBarHidden(true)
          }}
          style={sideBarHidden ? { width: 0 } : { width: 250 }}
        />
      </div>
    </div>
  );
};
  
export default Root;