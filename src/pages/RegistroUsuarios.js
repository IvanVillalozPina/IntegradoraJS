import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/styles/EstilosFormularios.css";

class RegistroUsuarios extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-dark bg-dark center">
          <div className="NavForms">Registro de usuarios</div>
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
                      placeholder="Nombre completo"
                    />
                    <div className="MargenesTextsForms1">
                      <div className="MargenesTextsForms2">Correo</div>
                      <input
                        class="form-control form-control-lg"
                        type="email"
                        name="email"
                        placeholder="Correo Electronico"
                      />
                    </div>
                    <div className="MargenesTextsForms1">
                      <div className="MargenesTextsForms2">Contraseña</div>
                      <input
                        class="form-control form-control-lg"
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                      />
                    </div>
                  <div className="SelectForms">
                    <select
                      className="form-select form-select-sm form-select"
                      aria-label=".form-select-sm example"
                    >
                      <option selected name="id_role">Rol</option>
                      <option value="1"></option>
                      <option value="2"></option>
                      <option value="3"></option>
                    </select>
                  </div>
                  </div>
                </div>
                <div className="MargenesImgForms1">
                  <div class="form-group">
                    <label for="exampleFormControlFile1">
                      <div className="MargenesImgForms2">Foto de perfil</div>
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
                          className="btn btn-dark btn-lg btn-block"
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
export default RegistroUsuarios;
