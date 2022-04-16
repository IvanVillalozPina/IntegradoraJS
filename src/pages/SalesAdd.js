import React from 'react';
import { Link } from "react-router-dom";
import '../components/styles/Add.css'

class SalesAdd extends React.Component {

    render() {

        return (
            <div className='divi1'>
                <div className='divi2'>
                    <center>
                        <div className="card bg-light mb-3">
                            <div className="card-header"> <h1>Nueva venta</h1> </div>
                            <div className="card-body">
                                <div>
                                    <form >
                                        <div className='colorear'>
                                            Cliente <br /> <input className='input-group-text' type='text' name='id_canal'
                                            readOnly
                                            />
                                        </div>
                                        <br />
                                        <div className='colorear'>
                                            Producto <br /> <input className='input-group-text' type='text' name='nombre_canal'
                                            
                                            />
                                            <br />
                                        </div>
                                        <div className='colorear'>
                                            Cantidad <br /> <input className='input-group-text' type='text' name='nombre_canal'
                                            />
                                            <br />
                                        </div>
                                        <div className='colorear'>
                                            Precio <br /> <input className='input-group-text' type='text' name='nombre_canal'
                                            readOnly
                                            />
                                            <br />
                                        </div>
                                        <div className='colorear'>
                                            Subtotal <br /> <input className='input-group-text' type='number' name='nombre_canal'
                                            />
                                            <br />
                                        </div>
                                        <div className='colorear'>
                                            Total <br /> <input className='input-group-text' type='number' name='nombre_canal'
                                            />
                                        </div>
                                        <div className='colorear'>
                                            <br />
                                            Metodo de pago
                                        </div>
                                        <div className='tipoletra'>
                                            <select name='id_area'
                                                className='input-group-text'
                                            >
                                                <option value='0'>Seleccionar metodo de pago</option>
                                            </select>
                                            <br />
                                            <input className='btn btn-secondary' type='submit' value='Pagar' />
                                        </div>
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
                                <Link to="/SalesTable" className='tipoletra' >
                                    <button type='button' className="btn btn-dark">Regresar</button>
                                </Link>
                            </div>
                        </div>
                    </center>
                </div>
            </div>

        )
    }
} export default SalesAdd;