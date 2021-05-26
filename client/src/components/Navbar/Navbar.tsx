import React from 'react';
import { withRouter } from 'react-router';
import NavbarMenu from "../../components/NavbarMenu/NavbarMenu"

const Navbar: React.FC = (): JSX.Element => {


    return (
        <>
         <NavbarMenu />   
        </>
    )
}

export default withRouter(Navbar)
