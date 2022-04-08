import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../components/styles/ProductDetail.css';
import "../components/styles/EstilosFormularios.css";
//FALTA CSS
class ProductDetail extends React.Component {

    state = {
        product: []
    }
    componentDidMount() {
        axios.get(
            "http://127.0.0.1:8000/api/products/" + this.props.location.state._id
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
            <div className='PDCard'>
                <div class="card">
                    <div class="card-header">
                        <div className='PDTittle'>
                            <h2 className="display-1">Detalle del producto</h2>
                        </div>
                    </div>
                    <div class="card-body">
                        <div>
                            <div className='row'>
                                <div className='col' >
                                    <div className='PDImagen'>
                                    <img src={this.state.product.image} className="img-thumbnail" width="500" height="300" alt='Producto' />
                                    </div>
                                </div>
                                <div className='PDTexts'>
                                <div className='col'>
                                    <br />
                                    Nombre: {this.state.product.name}
                                    <br />
                                    Descripción: {this.state.product.description}
                                    <br />
                                    Disponibilidad: {this.state.product.stock} unidades
                                    <br />
                                    Precio: {this.state.product.price} MXN
                                    <br />
                                    Cantidad: {this.state.product.stock}
                                    <br />
                                    <Link to="/products/list/">
                                        <button type="button" className="btn btn-primary btn-lg">Regresar</button>
                                    </Link>
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
export default ProductDetail;







