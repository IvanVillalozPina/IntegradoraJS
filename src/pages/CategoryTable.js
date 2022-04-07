import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class CategoryTable extends React.Component {

    // init state
  state = {
    categories:[]
  };

  // function to update the input into the state
  form2val = ({name, value}) => {
    this.setState({[name]: value});
  }

  // functio  to get all categories
  componentDidMount(){
    axios.get(
      "http://127.0.0.1:8000/api/categories/"
    )
    .then(res => {
      console.log(res);
      console.log(res.data);
      console.log(res.data.categories);
      // check null
      if(res.data.categories.length > 0){
        this.setState({
          categories: res.data.categories
        });
      }
      else{
        this.setState({
          categories: [{
            _id: 1,
            name: "No hay categorias"
          }]
        });
      }
    })
    .catch(err => {
      console.log(err);
      console.log(err.response);
    });
  }

    render() {
        const { categories } = this.state
        return (
            <div>
                <h1>Categorias</h1>
                <Link to={{pathname:'/categories/form/register'}} className="btn btn-primary">Crear </Link>
                <br />
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Categoria</th>
                            <th scope="col">Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category, i) =>
                            <tr key={i}>
                                <td scope="row">{category._id}</td>
                                <td>{category.category}</td>
                                <td>
                                    <td>
                                        <Link to={{ pathname: '/categories/delete', state: { _id: category._id } }}>
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