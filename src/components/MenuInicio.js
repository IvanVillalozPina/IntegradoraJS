import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/MenuInicio.css";

class MenuInicio extends React.Component {
  render() {
    const { imagen, nombre, descripcion, boton } = this.props;
    return (   
      <div className="CentrarItems">
        <div className="card">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <div>
                    <img className="TamanoImagen" src={imagen} alt="imagen" />
                  </div>
                  <div>
                    <div>{nombre} </div>
                    <div>{descripcion} </div>
                  </div>
                  <div>
                    <div type="button" class={boton}>
                      Más información
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MenuInicio;
