import React from 'react';
import { Link } from 'react-router-dom';
import '../components/styles/Table.css'
import NavbarAdmin from '../components/NavbarAdmin';

class CustomersTable extends React.Component {
    render() {

        return (
            <div>
                <div>
                    <NavbarAdmin/>
                </div>
                <center>
                    <h1>Clientes</h1>
                </center>
                <div className='bottonCrear'>
                <Link to={{ pathname: '/CustomersAdd' }}>
                    <button type='button' className="btn btn-info">Agregar Cliente</button>
                </Link>
                </div>
                
                <div className='TablaCanal'>
                    <table className='table table-striped table-bordered table-light' >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Imágen</th>
                                <th>Nombre</th>
                                <th>Apellidos</th>
                                <th>Correo</th>
                                <th>Numero de telefono</th>
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
                                        <Link to={{ pathname: '/CustomersDetail'}}>
                                            <button type='button' className="btn btn-secondary">Detalle</button>
                                        </Link>
                                        </div>
                                        <div className='bottonTopsecondary'>
                                        <Link to={{ pathname: '/CustomersEdit'}}>
                                            <button type='button' className="btn btn-dark">Actualizar</button>
                                        </Link>
                                        </div>
                                        <div className='bottonTopsecondary'>
                                        <Link to={{ pathname: '/CustomersDelete'}}>
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
export default CustomersTable