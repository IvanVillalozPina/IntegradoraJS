import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/js/dist/modal';
import "./styles/MenuInicio.css";

class MenuInicio extends React.Component {
  state = {
    products: []
}

componentDidMount() {
    fetch('http://127.0.0.1:8000/api/cargaempleados')
        .then(response => response.json())
        .then(productsJson => this.setState({ products: productsJson }))
}
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
                    <div type="button" className="btn btn-dark">
                      Más información
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