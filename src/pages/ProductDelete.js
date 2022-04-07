import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'
class ProductDelete extends React.Component {

    state = {
        product: []
    }
    componentDidMount(){
        axios.delete(
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
                <h1>Eliminar Producto</h1>
                <br />
                <div className='alert alert-success'>
                    <strong>¡Hecho!</strong> El producto {this.state.product.name}  ha sido eliminado correctamente.
                </div>
                <div>
                    <Link to="/products/list/">
                        <button type="button" className="btn btn-lg btn-dark">Regresar</button>
                    </Link>
                </div>
            </div>
        );
    }
}
export default ProductDelete;