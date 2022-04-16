import React from 'react';
import { Link } from "react-router-dom";
import '../components/styles/Add.css'

class PaymentMethodsAdd extends React.Component {

    render() {

        return (
            <div className='divi1'>
                <div className='divi2'>
                    <center>
                        <div className="card bg-light mb-3">
                            <div className="card-header"> <h1>Creación metodo de pago</h1> </div>
                            <div className="card-body">
                                <div>
                                    <form >
                                        <div className='colorear'>
                                        ID metodo <br /> <input className='input-group-text' type='text' name='id_canal'   
                                        />
                                        </div>
                                        <br />
                                        <div className='colorear'>
                                        Metodo de pago <br /> <input className='input-group-text' type='text' name='nombre_canal'      
                                        />
                                        <br />
                                        </div>
                                        <div className='tipoletra'>
                                        <input className='btn btn-secondary' type='submit' value='Agregar metodo de pago' />
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
                                <Link to="/PaymentMethodsTable" className='tipoletra' >
                                    <button type='button' className="btn btn-dark">Regresar</button>
                                </Link>
                            </div>
                        </div>
                    </center>
                </div>
            </div>

        )
    }
} export default PaymentMethodsAdd;