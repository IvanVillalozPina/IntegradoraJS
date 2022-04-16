import React from 'react';
import { Link } from 'react-router-dom';
import '../components/styles/Edit.css';

class CategoriesEdit extends React.Component {

    render() {
        return (
            <div className='divx1'>
                <div className='divx2'>
                    <center>
                        <div class="card text-white bg-light mb-3">
                            <div class="card-header"> <h1>Modificación de categoria</h1> </div>
                            <div class="card-body">
                                <br />
                                <form>
                                    <div className='colorear'>
                                        ID categoria <br /> <input className='input-group-text' type='text' name='id_canal'
                                        />
                                        <br />
                                    </div>
                                    <div className='colorear'>
                                        Nombre de la categoria <br /> <input className='input-group-text' type='text' name='nombre_canal'
                                        />
                                    </div>
                                    <br />
                                    <div className='tipoletra'>
                                        <input className='btn btn-dark' type='submit' value='Actualizar categoria' />
                                    </div>
                                </form>
                                <br />
                                {/*
                                    <div>
                                    {this.state.resultado
                                        ? <div className='alert alert-success'>{this.state.resultado}</div>
                                        : <div></div>
                                    }
                                </div>
                                 */}
                                <div>
                                    <Link to="/CategoriesTable" className='tipoletra' >
                                        <button type='button' className="btn btn-secondary">Regresar</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </center>
                </div>
            </div>
        )
    }
}
export default CategoriesEdit;