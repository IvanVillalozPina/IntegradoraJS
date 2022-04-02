import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../components/styles/EstilosFormularios.css'

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
                      name="name"
                      placeholder="Nombre del producto"
                    />
                    <div className="MargenesTextsForms1">
                      <div className="MargenesTextsForms2">Descripción</div>
                      <input
                        class="form-control form-control-lg"
                        type="text-box"
                        name="description"
                        placeholder="Descripción"
                      />
                    </div>
                    <div className="MargenesTextsForms1">
                      <div className="MargenesTextsForms2">Precio</div>
                      <input
                        class="form-control form-control-lg"
                        type="number"
                        name="price"
                        placeholder="Precio del producto"
                      />
                      <div className="MargenesTextsForms1">
                        <div className="MargenesTextsForms2">Cantidad</div>
                        <input
                          class="form-control form-control-lg"
                          type="number"
                          name="quantity"
                          placeholder="Precio del producto"
                        />
                      </div>
                      <div className="MargenesTextsForms1">
                        <div className="MargenesTextsForms2">Referencia</div>
                        <input
                          class="form-control form-control-lg"
                          type="text-box"
                          name="reference"
                          placeholder="Referencia"
                        />
                      </div>

                      <div className="MargenesTextsForms1">
                        <div className="MargenesTextsForms2">Stock</div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="stock"
                            id="yes"
                          />
                          <label class="form-check-label" for="yes">
                            Si
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="stock"
                            id="no"
                            checked
                          />
                          <label class="form-check-label" for="no">
                            No
                          </label>
                        </div>
                      </div>
                    </div>
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
                            name="image"
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
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default AltaProductos;
