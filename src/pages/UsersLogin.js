import React from 'react';
import '../components/styles/Add.css'
import CasaMontero from "../pictures/CasaMontero.jpg";
import {Link} from "react-router-dom";
import axios from 'axios';

class UsersLogin extends React.Component {
    state = {
        email: '',
        password: '',
        user_token: '',
        user_type: '',
        error: ''
    };

    valueToState = async e => {
        e.persist();
        await this.setState({
            ...this.state,
            [e.target.name]: e.target.type === "checkbox" ? e.target.checked:e.target.value
        });
        this.valupdater();
    };

    valueChecker = () => {
        if (this.state.email === '' || this.state.password === '') {
            return false;
        }
        return true;
    };
    
    formNextStep(){
        axios.post('http://127.0.0.1:8000/api/auth/login', 
        {
            email: this.state.email,
            password: this.state.password,
        },
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(
            response => {
                this.setState({
                    user_token: response.data.data.token.plainTextToken,
                    user_type: response.data.data.token.accessToken.name
                });
                localStorage.setItem('user_token', this.state.user_token);
                localStorage.setItem('user_type', this.state.user_type);
                window.location.href = '/';
            }
        )
        .catch(
            error => {
                this.setState({
                    error: 'Revisa tu correo y contraseña'
                });
            }
        );
    }

    componentDidMount() {
        if (localStorage.getItem('user_token') !== null) {
            window.location.href = '/';
        }
    }


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
                                onChange={this.valueToState}
                            />
                        </div>
                        <br/>
                        <div className="form-group">
                            <h2>Contraseña</h2>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                placeholder="Contraseña"
                                onChange={this.valueToState}
                            />
                        </div>
                        <br />
                        <Link 
                            
                            type="button"
                            className={this.valueChecker() ? "btn btn-lg btn-primary" : "btn btn-lg btn-primary disabled"}
                            onClick={() => this.formNextStep()}
                        >
                            Iniciar Sesión
                        </Link>
                    </form>
                </center>
            </div>
        );
    }
}
export default UsersLogin;