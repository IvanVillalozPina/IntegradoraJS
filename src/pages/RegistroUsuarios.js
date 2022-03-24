import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class RegistroUsuarios extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-dark bg-dark">
          <span class="navbar-brand mb-0 h1">Registro Usuarios</span>
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
                  placeholder="Nombre completo"
                />
                Correo{" "}
                <input
                  class="form-control form-control-lg"
                  type="text"
                  name="email"
                  placeholder="Correo Electronico"
                />
                Contraseña{" "}
                <input
                  class="form-control form-control-lg"
                  type="password"
                  name="contrasena"
                  placeholder="Contraseña"
                />
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
              <div class="col">
                <form>
                  <div class="form-group">
                    <label for="exampleFormControlFile1">
                      Foto de perfilㅤ
                    </label>
                    <div class="row">
                      <input
                        type="file"
                        class="form-control-file"
                        id="exampleFormControlFile1"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="row">
              <button type="button" value="Submit" class="btn btn-dark">
                Registrar
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default RegistroUsuarios;
