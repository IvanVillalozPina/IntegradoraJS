import React from 'react';
import { Link } from "react-router-dom";
import '../components/styles/Add.css'

class CustomersAdd extends React.Component {

    render() {

        return (
            <div className='divi1'>
                <div className='divi2'>
                    <center>
                        <div className="card bg-light mb-3">
                            <div className="card-header"> <h1>Registro de clientes</h1> </div>
                            <div className="card-body">
                                <div>
                                    <form >
                                        <div className='colorear'>
                                            Nombre <br /> <input className='input-group-text' type='text' name='id_canal'
                                            />
                                        </div>
                                        <br />
                                        <div className='colorear'>
                                            Apellidos <br /> <input className='input-group-text' type='text' name='nombre_canal'
                                            />
                                            <br />
                                        </div>
                                        <div className='colorear'>
                                            Correo electronico <br /> <input className='input-group-text' type='email' name='nombre_canal'
                                            />
                                            <br />
                                        </div>
                                        <div className='colorear'>
                                            Numero de telefono <br /> <input className='input-group-text' type='number' name='nombre_canal'
                                            />
                                            <br />
                                        </div>
                                        <div className='colorear'>
                                            Foto<br />
                                        </div>
                                        <input type="file"
                                            className='input-group-text'
                                        ></input>
                                        <br />
                                        <input className='btn btn-secondary' type='submit' value='Crear cliente' />
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
                                <Link to="/CustomersTable" className='tipoletra' >
                                    <button type='button' className="btn btn-dark">Regresar</button>
                                </Link>
                            </div>
                        </div>
                    </center>
                </div>
            </div>

        )
    }
} export default CustomersAdd;