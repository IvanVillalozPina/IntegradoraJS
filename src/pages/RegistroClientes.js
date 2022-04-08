import React from "react";
import "../components/styles/EstilosFormularios.css";
import NavBarPrincipal from "../components/NavBarPrincipal";
import axios from "axios";

class RegistroClientes extends React.Component {
  // init state
  state = {
    first_name : "",
    last_name : "",
    phone_number : "",
    email : ""
  }
  // function to update the input into the state
  form2val = ({name, value}) => {
    this.setState({[name]: value});
  }

  // function to register
  register(){
    axios.post(
      "http://127.0.0.1:8000/api/customers/",
      {
        first_name:this.state.first_name,
        last_name:this.state.last_name,
        phone_number:this.state.phone_number,
        email:this.state.email
      },
      {
        headers: {
          'X-CSRFToken': '{{ csrf_token }}'
        }
      }
    )
    .then(res => {
      // Redirect to login in /products/list
      this.props.history.push("/customers/list");
    })
    .catch(err => {
      console.log(err);
      console.log(err.response);
      // Redirect to register in /products/form/register
      this.props.history.push("/customers/form/register");
    });
  }

  render() {
    return (
      <div>
        <div>
          <NavBarPrincipal />
        </div>
        <div className="TextsTittle">
        <h1 className="display-1">Registro Clientes</h1>
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
                      onKeyUp={(e) => this.form2val(e.target)}
                    />
                    <div className="MargenesTextsForms1">
                    <div className="MargenesTextsForms2">Apellidos</div>
                    <input
                      class="form-control form-control-lg"
                      type="text"
                      name="last_name"
                      placeholder="Apellidos"
                      onKeyUp={(e) => this.form2val(e.target)}
                    />
                    </div>
                    <div className="MargenesTextsForms1">
                      <div className="MargenesTextsForms2">Teléfono</div>
                      <input
                        class="form-control form-control-lg"
                        type="tel"
                        name="phone_number"
                        placeholder="Teléfono"
                        onKeyUp={(e) => this.form2val(e.target)}
                      />
                    </div>
                    <div className="MargenesTextsForms1">
                      <div className="MargenesTextsForms2">Correo</div>
                      <input
                        class="form-control form-control-lg"
                        type="text"
                        name="email"
                        placeholder="Correo Electronico"
                        onKeyUp={(e) => this.form2val(e.target)}
                      />
                    </div>
                    <div className="MargenesImgForms1">
                      <div>
                        <div>
                          <div className="BotonForms1">
                            <button
                              type="button"
                              class="btn btn-primary btn-lg"
                              onClick={() => this.register()}
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
