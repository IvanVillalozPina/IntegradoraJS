import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

class CategoryDelete extends React.Component {
    state = {
        category: []
    }
    componentDidMount(){
        axios.delete(
            "http://127.0.0.1:8000/api/categories/"+this.props.location.state._id
            )
            .then(res => {
            console.log(res);
            console.log(res.data);
            console.log(res.data.category);
            this.setState({
                category: res.data.category
            });
            })
            .catch(err => {
            console.log(err);
            console.log(err.response);
            }
        );
    }

    render() {
        return (
            <div>
                <h1>Eliminar categoria</h1>
                <br />
                <div className='alert alert-success'>
                    <strong>¡Hecha! </strong> La categoria: {this.state.category.category} ha sido eliminado correctamente.
                </div>
                <div>
                    <Link to="/categories/list">
                        <button type="button" className="btn btn-dark">Regresar</button>
                    </Link>
                </div>
            </div>
        );
    }
}
export default CategoryDelete;