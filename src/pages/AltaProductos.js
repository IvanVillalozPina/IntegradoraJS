import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class AltaProductos extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-dark bg-dark center">
          <div className="NavForms">Alta de productos</div>
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
                      placeholder="Nombre del producto"
                    />
                    <div className="MargenesTextsForms1">
                      <div className="MargenesTextsForms2">Descripción</div>
                      <input
                        class="form-control form-control-lg"
                        type="text-box"
                        name="descripcion"
                        placeholder="Descripción"
                      />
                    </div>
                    <div className="MargenesTextsForms1">
                      <div className="MargenesTextsForms2"> Precio</div>
                      <input
                        class="form-control form-control-lg"
                        type="number"
                        name="numeroTel"
                        placeholder="Precio del producto"
                      />
                    </div>
                    <div className="MargenesTextsForms1">
                      <div className="MargenesTextsForms2">Referencia</div>
                      <input
                        class="form-control form-control-lg"
                        type="text-box"
                        name="referencia"
                        placeholder="Referencia"
                      />
                    </div>

                    <div className="MargenesTextsForms1">
                      <div className="MargenesTextsForms2">Stock</div>
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
                    </div>
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
                  </div>
                  <div className="MargenesImgForms1">
                    <div class="form-group">
                      <label for="exampleFormControlFile1">
                        <div className="MargenesImgForms2">
                          Imagen del producto
                        </div>
                      </label>
                      <div>
                        <input
                          type="file"
                          class="form-control-file"
                          id="exampleFormControlFile1"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="BotonForms1">
                        <button
                          type="button"
                          value="Submit"
                          class="btn btn-dark btn-lg btn-block"
                        >
                          Registrar
                        </button>
                      </div>
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
export default AltaProductos;
