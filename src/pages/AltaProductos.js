import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class AltaProductos extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-dark bg-dark">
          <span class="navbar-brand mb-0 h1">Alta de Productos</span>
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
                  placeholder="Nombre del producto"
                />
                Descripción{" "}
                <input
                  class="form-control form-control-lg"
                  type="text-box"
                  name="descripcion"
                  placeholder="Descripción"
                />
                Precio{" "}
                <input
                  class="form-control form-control-lg"
                  type="number"
                  name="numeroTel"
                  placeholder="Precio del producto"
                />
                Referencia{" "}
                <input
                  class="form-control form-control-lg"
                  type="text-box"
                  name="referencia"
                  placeholder="Referencia"
                />
                <fieldset disabled>
                  <label for="disabledTextInput"></label>
                  <input
                    class="form-control form-control-lg"
                    type="text-box"
                    name="referencia"
                    placeholder="Stock"
                  />
                </fieldset>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="option1"
                  />
                  <label class="form-check-label" for="exampleRadios1">
                    Si
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios2"
                    value="option2"
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    No
                  </label>
                </div>
                <button type="button" value="Submit" class="btn btn-dark">
                  Registrar
                </button>
              </div>
              <div class="col">
                <form>
                  <div class="form-group">
                    <label for="exampleFormControlFile1">
                      Imagen del productoㅤ
                    </label>
                    <div class="row">
                      <input
                        type="file"
                        class="form-control-file"
                        id="exampleFormControlFile1"
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
                  </div>
                </form>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default AltaProductos;
