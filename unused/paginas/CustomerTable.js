import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NavBarPrincipal from "../components/NavBarPrincipal";
import "../components/styles/EstilosFormularios.css";

class CustomerTable extends React.Component {

    state = {
        customers: []
    }

    // function to get all products
    componentDidMount() {
        axios.get(
            "http://127.0.0.1:8000/api/customers/"
        )
            .then(res => {
                this.setState({
                    customers: res.data.customers
                });

            })
            .catch(err => {
                console.log(err);
                console.log(err.response);
            });
    }

    render() {
        const { customers } = this.state
        return (
            <div>
                <div>
                    <NavBarPrincipal />
                </div>
                <div className="TextsTittle">
                    <h1 className="display-1">Gestión de clientes</h1>
                </div>
                <div className="LinkCrear">
                <Link to={{ pathname: '/customers/form/register' }} className="btn btn-primary">Crear</Link>
                </div>
                <br />
                
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Correo</th>
                            <th scope="col">Número de telefono</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map(customer =>
                            <tr key={customer._id}>
                                <td>{customer._id}</td>
                                <td>{customer.first_name} {customer.last_name} </td>
                                <td>{customer.email}</td>
                                <td>{customer.phone_number}</td>
                                    {/* <td>
                                        <Link to={{ pathname: '/CustomerDetail', state: { id_customer: customer.id_customer } }}>
                                            <button type="button" className="btn btn-dark">Detalle</button>
                                        </Link>
                                    </td> */}
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default CustomerTable;