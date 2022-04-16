import React from 'react';
import { Link } from "react-router-dom";
import '../components/styles/Add.css'

class ProductsAdd extends React.Component {

    render() {

        return (
            <div className='divi1'>
                <div className='divi2'>
                    <center>
                        <div className="card bg-light mb-3">
                            <div className="card-header"> <h1>Creación de producto</h1> </div>
                            <div className="card-body">
                                <div>
                                    <form >
                                        <div className='colorear'>
                                            ID producto <br /> <input className='input-group-text' type='text' name='id_canal'
                                            />
                                        </div>
                                        <br />
                                        <div className='colorear'>
                                            Nombre del producto <br /> <input className='input-group-text' type='text' name='nombre_canal'
                                            />
                                            <br />
                                        </div>
                                        <div className='colorear'>
                                            Descripción <br /> <input className='input-group-text' type='text' name='nombre_canal'
                                            />
                                            <br />
                                        </div>
                                        <div className='colorear'>
                                            Referencia <br /> <input className='input-group-text' type='text' name='nombre_canal'
                                            />
                                            <br />
                                        </div>
                                        <div className='colorear'>
                                            Precio <br /> <input className='input-group-text' type='number' name='nombre_canal'
                                            />
                                            <br />
                                        </div>
                                        Disponible
                                        <br />
                                        <input type='radio' name='sexo' value={true} /> SIㅤㅤ
                                        <input type='radio' name='sexo' value={false} /> NO
                                        <div className='tipoletra'>
                                            <br />
                                            Categoria<br />
                                            <select name='id_area' 
                                             className='input-group-text'
                                            >
                                                <option value='0'>Seleccionar categoria</option>
                                            </select>
                                            <br />
                                            <input type="file"
                                            className='input-group-text'
                                            ></input>
                                            <br />
                                            <input className='btn btn-secondary' type='submit' value='Crear producto' />
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
                                <Link to="/ProductsTable" className='tipoletra' >
                                    <button type='button' className="btn btn-dark">Regresar</button>
                                </Link>
                            </div>
                        </div>
                    </center>
                </div>
            </div>

        )
    }
} export default ProductsAdd;