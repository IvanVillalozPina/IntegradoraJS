import React from 'react';
import { Link } from 'react-router-dom';
import '../components/styles/Table.css';
import { LoginRequired } from '../utils/Middleware/LoginRequired';
import NavbarSelector from '../components/NavbarSelector';

class PaymentMethodsTable extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <NavbarSelector/>
                </div>
                <center>
                    <h1>Metodos de pago</h1>
                </center>
                
                <div className='TablaCanal'>
                    <table className='table table-striped table-bordered table-light' >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Metodos de pago</th>
                            </tr>
                        </thead>
                        <tbody>
                                <tr>
                                    <th scope='row'></th>
                                    <td></td>
                                </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default LoginRequired(PaymentMethodsTable, 'none');