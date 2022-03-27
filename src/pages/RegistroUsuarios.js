import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/styles/EstilosFormularios.css";

class RegistroUsuarios extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-dark bg-dark center">
          <div className="NavForms">Registro Usuarios</div>
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
                      <div class="dropdown">
                        <button
                          class="btn btn-secondary dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Rol
                        </button>
                        <div
                          class="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <a class="dropdown-item">A</a>
                          <a class="dropdown-item">B</a>
                          <a class="dropdown-item">C</a>
                        </div>
                      </div>
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
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default RegistroUsuarios;
