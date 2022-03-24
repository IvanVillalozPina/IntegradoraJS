import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class ConsultaProductos extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-dark bg-dark">
          <span class="navbar-brand mb-0 h1">Consulta de Productos</span>
        </nav>
        <form>
          <div class="container">
            <div class="row">
              <div class="col">
                Nombre{" "}
                <input
                  class="form-control form-control-lg"
                  type="text"
                  name="nombre"
                  placeholder="Nombre del articulo"
                />
              </div>
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Categoria
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">
                    A
                  </a>
                  <a class="dropdown-item" href="#">
                    B
                  </a>
                  <a class="dropdown-item" href="#">
                    C
                  </a>
                </div>
              </div>
            </div>
            <button type="button" value="Submit" class="btn btn-dark">
              Registrar
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default ConsultaProductos;
