import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class ConsultaProductos extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-dark bg-dark center">
          <div className="NavForms">Consulta de productos</div>
        </nav>
        <div className="Posicion1">
          <div className="Posicion2">
            <form className="Posicion3">
              <div class="container">
                <div class="row">
                  <div class="col">
                    <div className="MargenesTextsForms2">Nombre</div>
                    <input
                      class="form-control form-control-lg"
                      type="text"
                      name="nombre"
                      placeholder="Nombre del articulo"
                    />
                  </div>
                  <div className="MargenesTextsForms1">
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
                      <div
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
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
                    <div className="BotonForms1">
                      <button type="button" value="Submit" class="btn btn-dark">
                        Registrar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default ConsultaProductos;
