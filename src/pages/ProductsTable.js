import React from 'react';
import { Link } from 'react-router-dom';
import '../components/styles/Table.css'
import NavbarAdmin from '../components/NavbarAdmin';

class ProductsTable extends React.Component {
    render() {

        return (
            <div>
                <div>
                    <NavbarAdmin/>
                </div>
                <center>
                    <h1>Productos</h1>
                </center>
                <div className='bottonCrear'>
                <Link to={{ pathname: '/ProductsAdd' }}>
                    <button type='button' className="btn btn-info">Crear producto</button>
                </Link>
                </div>
                
                <div className='TablaCanal'>
                    <table className='table table-striped table-bordered table-light' >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Imágen</th>
                                <th>Nombre</th>
                                <th>Descripción</th>
                                <th>Precio</th>
                                <th>Categoria</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                                <tr>
                                    <th scope='row'></th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <div className='bottonTop'>
                                        <Link to={{ pathname: '/ProductsDetail'}}>
                                            <button type='button' className="btn btn-secondary">Detalle</button>
                                        </Link>
                                        </div>
                                        <div className='bottonTopsecondary'>
                                        <Link to={{ pathname: '/ProductsEdit'}}>
                                            <button type='button' className="btn btn-dark">Actualizar</button>
                                        </Link>
                                        </div>
                                        <div className='bottonTopsecondary'>
                                        <Link to={{ pathname: '/ProductsDelete'}}>
                                            <button type='button' className="btn btn-danger">Eliminar</button>
                                        </Link>
                                        </div>
                                    </td>
                                </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default ProductsTable