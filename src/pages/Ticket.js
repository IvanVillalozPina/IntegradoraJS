import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

class Ticket extends React.Component {
    state = {
        tickets: []
    }

    componentDidMount() {
        fetch('' + this.props.location.state.id_sales)
            .then(response => response.json())
            .then(ticketsJson => this.setState({ tickets: ticketsJson }))
    }

    render() {
        const { tickets } = this.state
        return (
            <div>
                <h1>Ticket</h1>
                <img src={tickets.id_customer}/>
                <br/>
                Metodo de pago: {tickets.id_payment_method}
                <br/>
                Subtotal: {tickets.subtotal} MXN
                <br/>
                Total: {tickets.total} MXN
                <br/>
                Fecha: {tickets.date} 
                <br/>
                <Link to="/">
                    <button type="button" className="btn btn-dark">Pagar</button>
                </Link>
            </div>
        );
    }
}
export default Ticket;