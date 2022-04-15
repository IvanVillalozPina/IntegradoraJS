import React from "react";
import CasaMontero from "../pictures/CasaMontero.jpg";

class NavbarAdmin extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <div className="InicioNavBar">
                <div>
                  <img src={CasaMontero} className="rounded" width="80" height="80" alt='Casa Montero Logo' />
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
                  <a class="nav-link" href="/products/list">Categorias</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/categories/list">Productos</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/customers/list">Clientes</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/payment/list">Metodos de pago</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/sells/ticket">Ventas</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/sells/ticket">Usuarios</a>
                </li>
                <div className="NVPBoton1">
                <a
                    href="/user/register"
                    className="btn btn-outline-light my-2 my-sm-0"
                  ><i class="bi bi-door-open-fill"/>Cerrar sesión
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
export default NavbarAdmin;
