import React from 'react';
import { Link } from 'react-router-dom';
import '../components/styles/Detail.css'

class CustomersDetail extends React.Component {

    render() {
        return (
            <div className='div1'>
                <div className='div2'>
                    <center>
                        <div class="card bg-light mb-3">
                            <div class="card-header"> <h1> Detalle cliente </h1> </div>
                            <div class="card-body">
                                <center>
                                    <img src="" className='fotos' alt='cliente' />
                                </center>
                                <div className='Tamañoydemas'>
                                    <br />
                                    <div>
                                    ID :
                                    </div>
                                    <br />
                                    <div>
                                    Nombre :
                                    </div>
                                    <br />
                                    <div>
                                    Correo :
                                    </div>
                                    <br />
                                    <div>
                                    Numero de telefono :
                                    </div>
                                    <br />
                                    <br />
                                    <Link to="/CustomersTable" >
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
export default CustomersDetail;