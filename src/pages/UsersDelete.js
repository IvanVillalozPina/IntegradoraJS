import React from 'react';
import { Link } from "react-router-dom";
import '../components/styles/Delete.css'

class UsersDelete extends React.Component {

    render() {
        return (
            <div className='division1'>
                <div className='division2'>
                    <center>
                        <div class="card bg-light mb-3">
                            <div class="card-header">  <h1>Eliminación de usuario</h1> </div>
                            <div class="card-body">
                                <div className='alert alert-info'>
                                    <strong>¡Hecho!</strong>
                                    <br />
                                    El usuario X ha sido eliminado.
                                </div>
                                <br />
                                <div>
                                    <Link to="/UsersTable" >
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
export default UsersDelete;