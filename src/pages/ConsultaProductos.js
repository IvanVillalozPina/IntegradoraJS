import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../components/styles/EstilosFormularios.css'
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
                      name="name"
                      placeholder="Nombre del articulo"
                    />
                  </div>
                  <div/>
                  <div className="SelectForms">
                    <select
                      className="form-select form-select-sm form-select"
                      aria-label=".form-select-sm example"
                    >
                      <option selected name="id_category">Categorias</option>
                      <option value="1"></option>
                      <option value="2"></option>
                      <option value="3"></option>
                    </select>
                  </div>
                  <div className="BotonForms1">
                    <button type="button" value="Submit" class="btn btn-dark">
                      Registrar
                    </button>
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
