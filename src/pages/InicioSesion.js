import React from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
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
                  name="email"
                  placeholder="Ingresa correo electrónico"
                  onChange={e => this.form2val(e.target)}
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
                  name="password"
                  placeholder="Contraseña"
                  onChange={e => this.form2val(e.target)}
                />
              </div>
              <div className="InicarSesionBoton">
                <button type="button" className="btn btn-dark" onClick={() => this.login()}>
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
