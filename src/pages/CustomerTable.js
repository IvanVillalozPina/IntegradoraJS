import React from "react";
import { Link } from "react-router-dom";

class CustomerTable extends React.Component {

    state = {
        customers: []
    }

    componentDidMount() {
        fetch('')
            .then(response => response.json())
            .then(customersJson => this.setState({ customers: customersJson }))
    }

    render() {
        const { customers } = this.state
        return (
            <div>
                <h1>Gestión de clientes</h1>
                <br />
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Correo</th>
                            <th scope="col">Número de telefono</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer, i) =>
                            <tr key={i}>
                                <th scope="row">{i + 1}</th>
                                <td>{customer.first_name} {customer.last_name} </td>
                                <td>{customer.email}</td>
                                <td>{customer.phone_number}</td>
                                <td>
                                    {/* <td>
                                        <Link to={{ pathname: '/CustomerDetail', state: { id_customer: customer.id_customer } }}>
                                            <button type="button" className="btn btn-dark">Detalle</button>
                                        </Link>
                                    </td> */}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default CustomerTable;