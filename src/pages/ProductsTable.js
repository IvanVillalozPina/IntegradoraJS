import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NavBarPrincipal from "../components/NavBarPrincipal";

class ProductsTable extends React.Component {
    // Init state
    state = {
        products: []
    }

    // function to update the input into the state
    form2val = ({name, value}) => {
        this.setState({[name]: value});
    }

    // function to get all products
    componentDidMount(){
        axios.get(
        "http://127.0.0.1:8000/api/products/"
        )
        .then(res => {
        console.log(res);
        console.log(res.data);
        console.log(res.data.products);
        // check null
        
            this.setState({
                products: res.data.products
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
                <div>
                    <NavBarPrincipal />
                </div>
                <h1>Tabla Productos</h1>
                <Link to={{pathname:'/products/form/register'}} className="btn btn-primary">Crear</Link>
                <br />
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th scope="col-1">#</th>
                            <th scope="col-2">Imagen</th>
                            <th scope="col-1">Nombre</th>
                            <th scope="col-3">Descripción</th>
                            <th scope="col-1">Precio</th>
                            <th scope="col-1">Disponibilidad</th>
                            <th scope="col-2">Referencia</th>
                            <th scope="col-1">Categoria</th>
                            <th scope="col-1">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.products.map(product => (
                                <tr>
                                    <th scope="row">{product._id}</th>
                                    <th scope="row"><img src={product.image} alt="Imagen" width="100" height="100"/></th>
                                    <td>{product.name}</td>
                                    <td>{product.description}</td>
                                    <td>{product.price}</td>
                                    <td>{product.stock}</td>
                                    <td>{product.reference}</td>
                                    <td>{product.category === undefined ? product.id_category : product.category}</td>
                                    <td>
                                        <Link to={{pathname:'/products/detail/', state:{_id:product._id}}} className="btn btn-primary">Ver</Link>
                                        <Link to={{pathname:'/products/delete/', state:{_id:product._id}}} className="btn btn-danger">Eliminar</Link>

                                    </td>
                                </tr>
                            ))  
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
export default ProductsTable;