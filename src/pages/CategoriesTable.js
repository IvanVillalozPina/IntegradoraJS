import React from 'react';
import { Link } from 'react-router-dom';
import '../components/styles/Table.css'
import NavbarAdmin from '../components/NavbarAdmin';

class CategoriesTable extends React.Component {
    render() {

      
        return (
            <div>
                <div>
                    <NavbarAdmin/>
                </div>
                <center>
                    <h1>Tabla Categorias</h1>
                </center>
                <div className='bottonCrear'>
                <Link to={{ pathname: '/CategoriesAdd' }}>
                    <button type='button' className="btn btn-info">Crear categoria</button>
                </Link>
                </div>
                
                <div className='TablaCanal'>
                    <table className='table table-striped table-bordered table-light' >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Categoria</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                                <tr>
                                    <th scope='row'></th>
                                    <td>

                                    </td>
                                    <td>
                                        <div className='bottonTop'>
                                        <Link to={{ pathname: '/CategoriesEdit'}}>
                                            <button type='button' className="btn btn-secondary">Actualizar</button>
                                        </Link>
                                        </div>
                                        <div className='bottonTopsecondary'>
                                        <Link to={{ pathname: '/CategoriesDelete'}}>
                                            <button type='button' className="btn btn-dark">Eliminar</button>
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
export default CategoriesTable