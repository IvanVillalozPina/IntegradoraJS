import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class RegistroClientes extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-dark bg-dark">
          <span class="navbar-brand mb-0 h1">Registro Clientes</span>
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
                Teléfono{" "}
                <input
                  class="form-control form-control-lg"
                  type="text"
                  name="nombre"
                  placeholder="Teléfono"
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
            <button type="button" value="Submit" class="btn btn-dark">
              Registrar
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default RegistroClientes;
