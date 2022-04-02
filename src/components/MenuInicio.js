import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/js/dist/modal';
import {Link} from 'react-router-dom';
import "./styles/MenuInicio.css";

class MenuInicio extends React.Component {
  render() {
    const { name, description, image, price, /* id_category */ } = this.props;
    return (
      <div className=" CentrarItems col-sm col-md col-lg col-xl">
        <div className="TarjetasMenuInicio">
          <div className="row">
            <div className="card-body">
              <div>
                <img className="TamanoImagen" src={image} alt="imagen" />
              </div>
              <div>
                <div className="TextoNameMenuPrincipal" >{name} </div>
                <div className="TextosPriceMenuPrincipal">{price} </div>
                <div className="TextosDescriptionMenuPrincipal">{description} </div>
              </div>
              <div>
                <Link  to={{ pathname: '/ProductDetail'}}>
                  <button type="button" className="btn btn-dark">Detalle</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>


    );
  }
}
export default MenuInicio;