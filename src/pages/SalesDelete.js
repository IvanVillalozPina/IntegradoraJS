import React from 'react';
import { Link } from "react-router-dom";
import '../components/styles/Delete.css'

class SalesDelete extends React.Component {

    render() {
        return (
            <div className='division1'>
                <div className='division2'>
                    <center>
                        <div class="card bg-light mb-3">
                            <div class="card-header">  <h1>Eliminación de ventas</h1> </div>
                            <div class="card-body">
                                <div className='alert alert-info'>
                                    <strong>¡Hecho!</strong>
                                    <br />
                                    La venta X ha sido eliminada.
                                </div>
                                <br />
                                <div>
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
export default SalesDelete;