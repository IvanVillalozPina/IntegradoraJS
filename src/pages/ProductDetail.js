import React from 'react';
import { Link } from 'react-router-dom';
//FALTA CSS
class ProductDetail extends React.Component {

    state = {
        products: []
    }

    componentDidMount() {
        fetch('' + this.props.location.state.id_product)
            .then(response => response.json())
            .then(productsJson => this.setState({ products: productsJson }))
    }

    render() {
        const { products } = this.state
        return (
            <div>
                <h1>Detalle del producto</h1>
                <img src={products.image} className="img-thumbnail" width="500" height="300" alt='Empleado'/>
                <br/>
                Nombre: {products.name}
                <br/>
                Descripción: {products.description}
                <br/>
                Disponibilidad: {products.stock} unidades
                <br/>
                Precio: {products.price} MXN
                <br/>
                Cantidad: {products.quantity}
                <br/>
                <Link to="/">
                    <button type="button" className="btn btn-dark">Regresar</button>
                </Link>
            </div>
        );
    }
}
export default ProductDetail;

