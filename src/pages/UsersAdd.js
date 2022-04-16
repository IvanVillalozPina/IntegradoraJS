import React from 'react';
import { Link } from "react-router-dom";
import '../components/styles/Add.css'

class UsersAdd extends React.Component {

    render() {

        return (
            <div className='divi1'>
                <div className='divi2'>
                    <center>
                        <div className="card bg-light mb-3">
                            <div className="card-header"> <h1>Registro de usuarios</h1> </div>
                            <div className="card-body">
                                <div>
                                    <form >
                                        <div className='colorear'>
                                            Nombre <br /> <input className='input-group-text' type='text' name='id_canal'
                                            />
                                        </div>
                                        <br />
                                        <div className='colorear'>
                                            Correo <br /> <input className='input-group-text' type='eamil' name='nombre_canal'
                                            />
                                            <br />
                                        </div>
                                        <div className='colorear'>
                                            Contraseña <br /> <input className='input-group-text' type='password' name='nombre_canal'
                                            />
                                        </div>
                                        <br />
                                        <input className='btn btn-secondary' type='submit' value='Crear usuario' />
                                    </form>
                                </div>
                                <br />
                                {/*
                                  <div>
                                    {this.state.resultado
                                        ? <div className='alert alert-success'>{this.state.resultado}</div>
                                        : <div></div>
                                    }
                                </div>
                                */}
                                <Link to="/UsersTable" className='tipoletra' >
                                    <button type='button' className="btn btn-dark">Regresar</button>
                                </Link>
                            </div>
                        </div>
                    </center>
                </div>
            </div>

        )
    }
} export default UsersAdd;