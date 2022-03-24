import React from "react";
import "./estilos/Inicio.css";

class InicioComponente extends React.Component {
  render() {
    return (
      <div className="jumbotronInicio">
        <div class="jumbotron">
          <h1 class="display-4">Tarea 5</h1>
          <p class="lead">Formularios y validaciones</p>
          <hr class="my-4" />
          <p>Tres paginas direccionadas</p>
          <p class="lead">
            <div>
              <div className="botonesInicio">
                <a href="/QuienSoy" class="btn btn-dark btn-lg btn-block">
                  ㅤㅤㅤㅤㅤ¿Quién soy?ㅤㅤㅤㅤㅤ
                </a>
              </div>

              <div className="botonesInicio">
                <a href="/Tarea3" class="btn btn-dark btn-lg btn-block">
                  ㅤㅤㅤㅤㅤㅤTarea 3ㅤㅤㅤㅤㅤㅤ
                </a>
              </div>

              <div className="botonesInicio">
                <a href="/Formulario" class="btn btn-dark btn-lg btn-block">
                  ㅤㅤㅤㅤㅤFormularioㅤㅤㅤㅤㅤ
                </a>
              </div>
            </div>
          </p>
        </div>
      </div>
    );
  }
}
export default InicioComponente;
