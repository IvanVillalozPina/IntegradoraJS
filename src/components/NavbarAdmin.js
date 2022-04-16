import React from "react";
import { Link } from "react-router-dom";
import '../components/styles/NavbarAdmin.css'

import CasaMontero from "../pictures/CasaMontero.jpg";

class NavbarAdmin extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-info">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <div className="InicioNavBar">
                <div>
                  <img src={CasaMontero} className="rounded" width="80" height="80" alt='Casa Montero Logo' />
                </div>
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
                <li className="nav-item">
                  <a className="nav-link" href="/CategoriesTable">Categorias</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/ProductsTable">Productos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">Clientes</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/PaymentMethodsTable">Metodos de pago</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">Ventas</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">Usuarios</a>
                </li>
                <div>
                <div className='bottonspace'>
                <Link to={{ pathname: '/' }}>
                    <button type='button' className="btn btn-dark btn-lg"><div className="tamaño">Cerrar sesión</div></button>
                </Link>
                </div>
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
