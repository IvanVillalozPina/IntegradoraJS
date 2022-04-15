import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import "./styles/NavBar.css";
import CasaMontero from "../pictures/CasaMontero.jpg";

class NavBarPrincipal extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
              <div className="InicioNavBar">
                <div>
                  <img className="ImagenMontero" src={CasaMontero} alt='Casa Montero Logo' />
                </div>
              </div>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarColor01">
              <ul class="navbar-nav me-auto">
                <li class="nav-item">
                  <a class="nav-link active" href="/">Inicio
                    <span class="visually-hidden">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/products/list">Productos</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/categories/list">Categorias</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/customers/list">Clientes</a>
                </li>
                {/*<li class="nav-item">
                  <a class="nav-link" href="/payment/list">Metodos de pago</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/sells/ticket">Compras</a>
                </li>*/}
                <div className="NVPBoton1">
                <a
                    href="/user/register"
                    className="btn btn-outline-light my-2 my-sm-0"
                  >
                    <i className="bi bi-person-circle" />Registro Admin
                  </a>
                </div>
                 <div className="NVPBoton2">
                 <a
                    href="/user/login"
                    className="btn btn-outline-light my-2 my-sm-0"
                  >
                    <i className="bi bi-person-circle" /> Login Admin
                  </a>
                 </div>
               

               
               
              
            
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default NavBarPrincipal;
