import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

class PaymentM extends React.Component {
    state = {
        metodos: []
    }

    componentDidMount() {
        fetch('')
            .then(response => response.json())
            .then(metodosJson => this.setState({ metodos: metodosJson }))
    }

    render() {
        const { metodos } = this.state
        return (
            <div>
                <h1>Metodos de pago</h1>

                <br />
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Metodo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {metodos.map((metodo, i) =>
                            <tr key={i}>
                                <th scope="row">{i + 1}</th>
                                <td><img src={metodo.method}/></td>
                                <td>
                                    <td>
                                        <Link to={{ pathname: '/PaymentM'}}>
                                            <button type="button" className="btn btn-dark">Crear</button>
                                        </Link>
                                    </td>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }

}
export default PaymentM;