import React from 'react';
import { Link } from 'react-router-dom';
import '../components/styles/CategoriesTable.css'
import NavbarAdmin from '../components/NavbarAdmin';

class CategoriesTable extends React.Component {

    state = {
        canales: []
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/')
            .then(response => response.json())  //convertir la respuesta a json
            .then(canalesJson => this.setState({ canales: canalesJson })) //guardar el json en el estado
    }

    render() {

        const { canales } = this.state;

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
                    <table className='table table-striped table-bordered table-primary' >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Categoria</th>
                            </tr>
                        </thead>
                        <tbody>
                            {canales.map((canal, i) =>
                                <tr key={i} >
                                    <th scope='row'>    {i + 1}   </th>
                                    <td>
                                        <div className='bottonTop'>
                                        <Link to={{ pathname: '/CategoriesDetail', state: { id_canal: canal.id_canal } }}>
                                            <button type='button' className="btn btn-info">Actualizar</button>
                                        </Link>
                                        </div>
                                        <div className='bottonTopsecondary'>
                                        <Link to={{ pathname: '/CategoriesDelete', state: { id_canal: canal.id_canal } }}>
                                            <button type='button' className="btn btn-danger">Eliminar</button>
                                        </Link>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default CategoriesTable