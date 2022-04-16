import React from 'react';
import { Link } from 'react-router-dom';
import '../components/styles/Table.css'
import NavbarAdmin from '../components/NavbarAdmin';

class SalesTable extends React.Component {
    render() {

        return (
            <div>
                <div>
                    <NavbarAdmin />
                </div>
                <center>
                    <h1>Ventas</h1>
                </center>
                <div className='bottonCrear'>
                    <Link to={{ pathname: '/SalesAdd' }}>
                        <button type='button' className="btn btn-info">Crear venta</button>
                    </Link>
                </div>

                <div className='TablaCanal'>
                    <table className='table table-striped table-bordered table-light' >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>ID cliente</th>
                                <th>ID metodo de pago</th>
                                <th>ID producto</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Fecha</th>
                                <th>Subtotal</th>
                                <th>Total</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope='row'></th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <div className='bottonTop'>
                                        <Link to={{ pathname: '/SalesDetail' }}>
                                            <button type='button' className="btn btn-secondary">Detalle</button>
                                        </Link>
                                    </div>
                                    <div className='bottonTopsecondary'>
                                        <Link to={{ pathname: '/SalesDelete' }}>
                                            <button type='button' className="btn btn-danger">Eliminar</button>
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default SalesTable