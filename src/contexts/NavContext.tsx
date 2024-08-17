import React, { createContext, useEffect, useState } from "react";

const NavContext = createContext({ navState: 1, handleMenuSelection: (index: number) => {} });

export const NavProvider = (props: {children: any}) => {

    const [navState, setNavState] = useState(1); 

    useEffect(() => {
        let i = window.sessionStorage.getItem('selectedMenuIndex')
        setNavState(i !== null ? parseInt(i) : 1 )
    }, [])

    const handleMenuSelection = (index: number) => {
        setNavState(index)
        window.sessionStorage.setItem('selectedMenuIndex', `${index}`);
        return 
    }


    return (<NavContext.Provider value={{ navState, handleMenuSelection }}>
        {props.children}
    </NavContext.Provider>
    )
}

export default NavContext;