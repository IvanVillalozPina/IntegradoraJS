import React from 'react';
import { Link } from 'react-router-dom';
import '../components/styles/Detail.css'

class SalesDetail extends React.Component {

    render() {
        return (
            <div className='div1'>
                <div className='div2'>
                    <center>
                        <div class="card bg-light mb-3">
                            <div class="card-header"> <h1> Detalle venta </h1> </div>
                            <div class="card-body">
                                <center>
                                    <img src="" className='fotos' alt='venta' />
                                </center>
                                <div className='Tamañoydemas'>
                                    <br />
                                    <div>
                                    Cliente :
                                    </div>
                                    <br />
                                    <div>
                                    Producto :
                                    </div>
                                    <br />
                                    <div>
                                    Cantidad :
                                    </div>
                                    <br />
                                    <div>
                                    Metodo de pago :
                                    </div>
                                    <br />
                                    <div>
                                    Fecha :
                                    </div>
                                    <br />
                                    <div>
                                    Total :
                                    </div>
                                    <br />
                                    <Link to="/SalesTable" >
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
export default SalesDetail;