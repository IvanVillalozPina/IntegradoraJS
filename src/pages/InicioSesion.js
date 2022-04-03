import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/styles/InicioSesion.css";
import CasaMontero from "../pictures/CasaMontero.jpg";

class InicioSesion extends React.Component {
  render() {
    return (
      <div className="JumbotronInicio">
        <div class="jumbotron">
          <div className="CasaMonteroDiv">
            <img
              src={CasaMontero}
              className="CasaMonteroImg"
              alt="CasaMontero"
            />
          </div>
          <div className="InicioSesionTexto">Iniciar Sesión</div>
          <div className="aligneLineShape">
          <div className="LineShape"/>
          </div>
          
          <div className="My4InicioSesion">
          <hr className="my-4" />
          </div>
          
          <div className="IniciarSesion">
            <form>
              <div class="form-group">
                <label>Correo electronico</label>
                <input
                  type="email"
                  class="form-control"
                  name="IngresaCorreo"
                  placeholder="Ingresa correo electrónico"
                />
                <small class="form-text text-muted">
                  Nunca compartiremos su correo electrónico.
                </small>
              </div>
              <div class="form-group">
                <label>Contraseña</label>
                <input
                  type="password"
                  class="form-control"
                  name="IngresaContrasena"
                  placeholder="Contraseña"
                />
              </div>
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  name="Recuerdame"
                />
                <label className="form-check-label">Recuerdame</label>
              </div>
              <div className="InicarSesionBoton">
                <a href="/DashAdmin" class="btn btn-dark">
                  Iniciar Sesión
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default InicioSesion;
