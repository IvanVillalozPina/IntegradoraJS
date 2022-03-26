import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/js/dist/modal';
import "./styles/MenuInicio.css";

class MenuInicio extends React.Component {
  render() {
    const { name, byname, description, image, id_category } = this.props;
    return (   
      <div className="CentrarItems col-sm col-md col-lg col-xl">
        <div className="card">
          <div className="row">
            <div className="col-sm col-md col-lg col-xl">
              <div className="card">
                <div className="card-body">
                  <div>
                    <img className="TamanoImagen" src={image} alt="imagen" />
                  </div>
                  <div>
                    <div>{name} </div>
                    <p>{description} </p>
                  </div>
                  <div>
                    <div type="button" class="btn btn-dark">
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