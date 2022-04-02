import React from 'react';
import { Link } from "react-router-dom";

class ProductDelete extends React.Component {

    state = {
        products: []
    }

    componentDidMount() {
        fetch('' + this.props.location.state.id_product)
            .then(response => response.json())
            .then(productsJson => this.setState({ products: productsJson }))

        fetch('' + this.props.location.state.id_product,
        {method: 'DELETE'})
    }

    render() {
        return (
            <div>
                <h1>Eliminar Producto</h1>
                <br />
                <div className='alert alert-success'>
                    <strong>¡Hecho!</strong> El producto
                    {this.state.products.name}  ha sido eliminado correctamente.
                </div>
                <div>
                    <Link to="/Crudempleados">
                        <button type="button" className="btn btn-dark">Regresar</button>
                    </Link>
                </div>
            </div>
        );
    }
}
export default ProductDelete;