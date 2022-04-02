import React from "react";
import { Link } from "react-router-dom";

class CategoryTable extends React.Component {

    state = {
        categories: []
    }

    componentDidMount() {
        fetch('')
            .then(response => response.json())
            .then(categoriesJson => this.setState({ categories: categoriesJson }))
    }

    render() {
        const { categories } = this.state
        return (
            <div>
                <h1>Categorias</h1>

                <br />
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Categoria</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category, i) =>
                            <tr key={i}>
                                <th scope="row">{i + 1}</th>e
                                <td>{category.id_category}</td>
                                <td>
                                    <td>
                                        <Link to={{ pathname: '/CategoryEdits', state: { id_category: category.category } }}>
                                            <button type="button" className="btn btn-dark">Editar</button>
                                        </Link>
                                    </td>

                                    <td>
                                        <Link to={{ pathname: '/CategoryDelete', state: { id_category: category.id_category } }}>
                                            <button type="button" className="btn btn-danger">Eliminar</button>
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
export default CategoryTable;