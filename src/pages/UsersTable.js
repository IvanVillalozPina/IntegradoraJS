import React from 'react';
import { Link } from 'react-router-dom';
import '../components/styles/Table.css'
import NavbarAdmin from '../components/NavbarAdmin';

class UsersTable extends React.Component {
    render() {

        return (
            <div>
                <div>
                    <NavbarAdmin/>
                </div>
                <center>
                    <h1>Usuarios</h1>
                </center>
                <div className='bottonCrear'>
                <Link to={{ pathname: '/UsersAdd' }}>
                    <button type='button' className="btn btn-info">Agregar usuario</button>
                </Link>
                </div>
                
                <div className='TablaCanal'>
                    <table className='table table-striped table-bordered table-light' >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Imágen</th>
                                <th>Nombre</th>
                                <th>Correo</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                                <tr>
                                    <th scope='row'></th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <div className='bottonTopsecondary'>
                                        <Link to={{ pathname: '/UsersDelete'}}>
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
export default UsersTable