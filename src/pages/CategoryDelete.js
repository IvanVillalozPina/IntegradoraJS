import React from 'react';
import { Link } from "react-router-dom";

class CategoryDelete extends React.Component {

    state = {
        categories: []
    }

    componentDidMount() {
        fetch('' + this.props.location.state.id_category)
            .then(response => response.json())
            .then(categoriesJson => this.setState({ categories: categoriesJson }))

        fetch('' + this.props.location.state.id_category,
        {method: 'DELETE'})
    }

    render() {
        return (
            <div>
                <h1>Eliminar categoria</h1>
                <br />
                <div className='alert alert-success'>
                    <strong>¡Hecha! </strong> La categoria:
                    {this.state.categories.id_category} ha sido eliminado correctamente.
                </div>
                <div>
                    <Link to="/CategoryEdits">
                        <button type="button" className="btn btn-dark">Regresar</button>
                    </Link>
                </div>
            </div>
        );
    }
}
export default CategoryDelete;