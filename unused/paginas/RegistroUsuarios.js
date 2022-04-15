import React from "react";
import axios from "axios";
import "../components/styles/EstilosFormularios.css";
import NavBarPrincipal from "../components/NavBarPrincipal";

class RegistroUsuarios extends React.Component {
  // Init state
  state = {
    name: "",
    password: "",
    password_confirmation: "",
    email: "",
  }

  // function to update the input into the state
  form2val = ({name, value}) => {
    this.setState({[name]: value});
  }

  // function to register
  register(){
    axios.post(
      "http://127.0.0.1:8000/api/user/register",
      {
        name: this.state.email,
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.password_confirmation,
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
      // Redirect to login in /user/login
      this.props.history.push("/user/login");
    })
    .catch(err => {
      console.log(err);
      console.log(err.response);
      // Redirect to register in /user/register
      this.props.history.push("/user/register");
    });
  }

  render() {
    return (
      <div>
        <div>
          <NavBarPrincipal />
        </div>
        <div className="TextsTittle">
        <h1 className="display-1">Registro Administradores</h1>
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
                      name="name"
                      placeholder="Nombre completo"
                      onChange={(e) => this.form2val(e.target)}
                    />
                    <div className="MargenesTextsForms1">
                      <div className="MargenesTextsForms2">Correo</div>
                      <input
                        class="form-control form-control-lg"
                        type="email"
                        name="email"
                        placeholder="Correo Electronico"
                        onChange={(e) => this.form2val(e.target)}
                      />
                    </div>
                    <div className="MargenesTextsForms1">
                      <div className="MargenesTextsForms2">Contraseña</div>
                      <input
                        class="form-control form-control-lg"
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        onChange={(e) => this.form2val(e.target)}
                      />
                    </div>
                    <div className="MargenesTextsForms1">
                      <div className="MargenesTextsForms2">Confirmar contraseña</div>
                      <input
                        class="form-control form-control-lg"
                        type="password"
                        name="password_confirmation"
                        placeholder="Contraseña"
                        onChange={(e) => this.form2val(e.target)}
                      />
                    </div>
                  </div>
                </div>
                <div className="MargenesImgForms1">
                  <div class="form-group">
                    <div>
                      <div className="BotonForms1">
                        <button
                          type="button"
                          value="Submit"
                          className="btn btn-primary btn-lg btn-block"
                          onClick={() => this.register()}
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
