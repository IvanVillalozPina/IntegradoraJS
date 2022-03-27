import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/styles/EstilosFormularios.css";
class RegistroClientes extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-dark bg-dark center">
          <div className="NavForms">Registro de clientes</div>
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
                      placeholder="Nombre completo"
                    />
                    <div className="MargenesTextsForms1">
                      <div className="MargenesTextsForms2">Teléfono</div>
                      <input
                        class="form-control form-control-lg"
                        type="tel"
                        name="nombre"
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
                    <div className="MargenesTextsForms1">
                      <div className="MargenesTextsForms2">Contraseña</div>
                      <input
                        class="form-control form-control-lg"
                        type="password"
                        name="contrasena"
                        placeholder="Contraseña"
                      />
                    </div>
                 
                    <div className="MargenesTextsForms1">
                      <div className="MargenesTextsForms2">Sexo</div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios1"
                          value="option1"
                        />
                        <label class="form-check-label" for="exampleRadios1">
                          Masculino
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
                          Femenino
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios3"
                          value="option3"
                        />
                        <label class="form-check-label" for="exampleRadios3">
                          Otro
                        </label>
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
                            />
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
