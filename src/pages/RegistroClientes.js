import React from "react";
import "../components/styles/EstilosFormularios.css";
import NavBarPrincipal from "../components/NavBarPrincipal";
class RegistroClientes extends React.Component {
  render() {
    return (
      <div>
        <div>
          <NavBarPrincipal />
        </div>
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
                      name="first_name"
                      placeholder="Nombre"
                    />
                    <div className="MargenesTextsForms1">
                    <div className="MargenesTextsForms2">Apellidos</div>
                    <input
                      class="form-control form-control-lg"
                      type="text"
                      name="last_name"
                      placeholder="Apellidos"
                    />
                    </div>
                    <div className="MargenesTextsForms1">
                      <div className="MargenesTextsForms2">Teléfono</div>
                      <input
                        class="form-control form-control-lg"
                        type="tel"
                        name="phone_number"
                        placeholder="Teléfono"
                      />
                    </div>
                    <div className="MargenesTextsForms1">
                      <div className="MargenesTextsForms2">Correo</div>
                      <input
                        class="form-control form-control-lg"
                        type="text"
                        name="email"
                        placeholder="Correo Electronico"
                      />
                    </div>
                    <div className="MargenesImgForms1">
                      <div class="form-group">
                        <label for="exampleFormControlFile1">
                          <div className="MargenesImgForms2">
                            Foto de perfil
                          </div>
                        </label>
                        <div>
                          <input
                            type="file"
                            class="form-control-file"
                            id="exampleFormControlFile1"
                            name="image"
                          />
                          <div className="BotonForms1">
                            <button
                              type="button"
                              value="Submit"
                              class="btn btn-primary btn-lg"
                            >
                              Registrar
                            </button>
                          </div>
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
export default RegistroClientes;
