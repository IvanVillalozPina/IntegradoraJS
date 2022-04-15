import React from "react";
import axios from "axios";
import "../components/styles/InicioSesion.css";
import CasaMontero from "../pictures/CasaMontero.jpg";

class InicioSesion extends React.Component {
  // init state
  state = {
    user: "",
    password: "",
    token: "",
  };

  // function to login
  login(){
      axios.post(
        "http://127.0.0.1:8000/api/user/login",
        {
          email: this.state.email,
          password: this.state.password
        },
        {
          headers: {
            'X-CSRFToken': '{{ csrf_token }}'
          }
        }
      )
      .then(res => {
        console.log(res);
        console.log(res.data);
        // redirect to home
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
        console.log(err.response);
        if (err.response.status === 419) {
          console.log("Usuario o contraseña incorrectos");
        }
      });
    }

  // function to update the input into the state
  form2val = ({name, value}) => {
    this.setState({[name]: value});
  }

  render() {
    return (
      <div className="JumbotronInicio">
        <div class="jumbotron">
          <div className="CasaMonteroDivImagen">
            <img
              src={CasaMontero}
              className="CasaMonteroImg"
              alt="CasaMontero"
            />
          </div>
          <h1 className="display-1">Iniciar Sesión</h1>
          
          <div className="My4InicioSesion">
          <hr className="my-4" />
          </div>
          
          <div className="IniciarSesionInputs">
            <form>
              <div className="form-group">
                <h2>Correo electronico</h2>
                <div className="IniciarSesionEspacio" />
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Ingresa correo electrónico"
                  onChange={e => this.form2val(e.target)}
                />
                <small className="form-text text-muted">
                <div className="IniciarSesionEspacioMedio" />
                  Nunca compartiremos su correo electrónico.
                  <div className="IniciarSesionEspacio" />
                </small>
              </div>
              <div class="form-group">
             
                <h2>Contraseña</h2>
                <div className="IniciarSesionEspacio" />
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Contraseña"
                  onChange={e => this.form2val(e.target)}
                />
              </div>
              <div className="InicarSesionBoton">
                <button type="button" className="btn btn-lg btn-primary" onClick={() => this.login()}>
                  Iniciar Sesión
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default InicioSesion;
