import React from "react";
import { Link } from "react-router-dom";

class ProductsTable extends React.Component {

    state = {
        products: []
    }

    componentDidMount() {
        fetch('')
            .then(response => response.json())
            .then(productsJson => this.setState({ products: productsJson }))
    }

    render() {
        const { products } = this.state
        return (
            <div>
                <h1>Tabla Productos</h1>

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
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, i) =>
                            <tr key={i}>
                                <th scope="row">{i + 1}</th>
                                <td><img src={product.image} className="rounded" width="100" height="100" alt="Empleado" /></td>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                <td>{product.stock}</td>
                                <td>{product.reference}</td>
                                <td>{product.id_category}</td>
                                <td>
                                    <td>
                                        <Link to={{ pathname: '/ProductDetail', state: { id_product: product.id_product } }}>
                                            <button type="button" className="btn btn-dark">Detalle</button>
                                        </Link>
                                    </td>

                                    <td>
                                        <Link to={{ pathname: '/ProductDelete', state: { id_product: product.id_product  } }}>
                                            <button type="button" className="btn btn-danger">Eliminar</button>
                                        </Link>
                                    </td>

                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default ProductsTable;