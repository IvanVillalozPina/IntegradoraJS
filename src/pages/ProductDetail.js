import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//FALTA CSS
class ProductDetail extends React.Component {

    state = {
        product: []
    }
    componentDidMount(){
        axios.get(
            "http://127.0.0.1:8000/api/products/"+this.props.location.state._id
            )
            .then(res => {
            console.log(res);
            console.log(res.data);
            console.log(res.data.product);
            this.setState({
                product: res.data.product
            });
            })
            .catch(err => {
            console.log(err);
            console.log(err.response);
            });
    }

    render() {
        return (
            <div>
                <h1>Detalle del producto</h1>
                <img src={this.state.product.image} className="img-thumbnail" width="500" height="300" alt='Empleado'/>
                <br/>
                Nombre: {this.state.product.name}
                <br/>
                Descripción: {this.state.product.description}
                <br/>
                Disponibilidad: {this.state.product.stock} unidades
                <br/>
                Precio: {this.state.product.price} MXN
                <br/>
                Cantidad: {this.state.product.stock}
                <br/>
                <Link to="/products/list/">
                    <button type="button" className="btn btn-dark">Regresar</button>
                </Link>
            </div>
        );
    }
}
export default ProductDetail;

