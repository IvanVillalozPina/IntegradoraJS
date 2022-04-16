import React from 'react';
import { Link } from 'react-router-dom';
import '../components/styles/Detail.css'

class ProductsDetail extends React.Component {

    render() {
        return (
            <div className='div1'>
                <div className='div2'>
                    <center>
                        <div class="card bg-light mb-3">
                            <div class="card-header"> <h1> Detalle producto </h1> </div>
                            <div class="card-body">
                                <center>
                                    <img src="" className='fotos' alt='producto' />
                                </center>
                                <div className='Tamañoydemas'>
                                    <br />
                                    <div>
                                    ID del producto :
                                    </div>
                                    <br />
                                    <div>
                                    Nombre del producto :
                                    </div>
                                    <br />
                                    <div>
                                    Disponibilidad :
                                    </div>
                                    <br />
                                    <div>
                                    Precio :
                                    </div>
                                    <br />
                                    <div>
                                    Referencia :
                                    </div>
                                    <br />
                                    <div>
                                    Descripción :
                                    </div>
                                    <br />
                                    <div>
                                    Categoria :
                                    </div>
                                    <br />
                                    <Link to="/ProductsTable" >
                                        <button type='button' className="btn btn-dark">Regresar</button>
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
export default ProductsDetail;