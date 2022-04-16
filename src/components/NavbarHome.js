import React from "react";
import '../components/styles/NavbarHome.css'

import CasaMontero from "../pictures/CasaMontero.jpg";

class NavbarAdmin extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                                <div>
                                    <img src={CasaMontero} className="rounded" width="80" height="80" alt='Casa Montero Logo' />
                                </div>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarColor01">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <a className="nav-link active" href="/">Inicio
                                        <span className="visually-hidden">(current)</span>
                                    </a>
                                </li>
                                <div className="BotonesAlFIinal">
                                <button href="" className="btn btn-warning btn-lg">
                                        Registrate
                                    </button>
                                </div>
                                <div className="BotonesAlFIinal2">
                                <button href="" className="btn btn-warning btn-lg">
                                        <i className="bi bi-person-circle" />
                                    </button>
                                </div>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
export default NavbarAdmin;
