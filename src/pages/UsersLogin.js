import React from 'react';
import '../components/styles/Add.css'
import CasaMontero from "../pictures/CasaMontero.jpg";
import {Link} from "react-router-dom";

class UsersLogin extends React.Component {
    render() {
        return (
            <div className='divi1'>
                <center>
                        <img
                            src={CasaMontero}
                            className="rounded" width="200" height="200"
                            alt="CasaMontero"
                        />
                    <h1 className="display-1">Iniciar Sesión</h1>
                    <form>
                        <div className="form-group">
                            <h2>Correo electronico</h2>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                placeholder="Ingresa correo electrónico"
                            />
                            <small >
                                <div/>
                                Nunca compartiremos su correo electrónico.
                            </small>
                        </div>
                        <br/>
                        <div class="form-group">
                            <h2>Contraseña</h2>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                placeholder="Contraseña"
                            />
                        </div>
                        <br />
                        <Link to='CategoriesTable'>
                        <button type="button" className="btn btn-lg btn-primary">
                            Iniciar Sesión
                        </button>
                        </Link>
                    </form>
                </center>
            </div>
        );
    }
}
export default UsersLogin;