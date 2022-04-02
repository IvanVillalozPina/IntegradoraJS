import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../components/styles/EstilosFormularios.css'
import { Link } from 'react-router-dom';

class CategoryEdits extends React.Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-dark bg-dark center">
                    <div className="NavForms2">Categorias: Altas y Modificaciones</div>
                </nav>
                <div className="Posicion1">
                    <div className="Posicion2">
                        <div className="Posicion3">
                            <div class="container">
                                <div class="row">
                                    <div class="col-12">
                                        <div className="SelectForms">
                                            <select
                                                className="form-select form-select-sm form-select"
                                                aria-label=".form-select-sm example"
                                            >
                                                <option selected name="id_role">Categoria</option>
                                                <option value="1"></option>
                                                <option value="2"></option>
                                                <option value="3"></option>
                                            </select>
                                        </div>
                                        <div className='row'>
                                            <div class='col-3'>
                                                <Link to="/">
                                                    <button type="button" className="btn btn-dark">Crear</button>
                                                </Link>
                                            </div>
                                            <div class='col-3'>
                                                <Link to="/">
                                                    <button type="button" className="btn btn-dark">Editar</button>
                                                </Link>
                                            </div>
                                            <div class='col-3'>
                                            </div>
                                            <div class='col'>
                                                <Link to="/CategoryDelete">
                                                    <button type="button" className="btn btn-dark">Eliminar</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
} export default CategoryEdits;
