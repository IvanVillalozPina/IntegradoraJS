import React from 'react';
import NavbarHome from '../components/NavbarHome';
import Carrusel from '../components/Carrusel';

class Home extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <NavbarHome />
                </div>
                <div>
                    <Carrusel />
                </div>
                <div>

                </div>
            </div>
        )
    }
}
export default Home;