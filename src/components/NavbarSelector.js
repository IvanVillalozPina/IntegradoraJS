import React from "react";
import NavbarHome from '../components/NavbarHome';
import NavbarAdmin from '../components/NavbarAdmin';

class NavbarSelector extends React.Component {
    navbarSelector() {
        if(localStorage.getItem('user_token') !== null) {
            return <NavbarAdmin />
        }
        else {
            return <NavbarHome />
        }
    }

    render() {
        return (
            <div>
                {
                    this.navbarSelector()
                }
            </div>
        );
    }
}

export default NavbarSelector;