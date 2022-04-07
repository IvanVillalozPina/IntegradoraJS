import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../components/styles/EstilosFormularios.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

class CategoryAdd extends React.Component {
    // init state
  state = {
    category:"",
  }

  // function to update the input into the state
  form2val = ({name, value}) => {
    this.setState({[name]: value});
  }

  // function to register
  register(){
    axios.post(
      "http://127.0.0.1:8000/api/categories/",
      {
        category: this.state.category,
      },
      {
        headers: {
          'X-CSRFToken': '{{ csrf_token }}'
        }
      }
    )
    .then(res => {
      console.log(res);
      console.log(res.data);
      // Redirect to login in /products/list
      this.props.history.push("/categories/list");
    })
    .catch(err => {
      console.log(err);
      console.log(err.response);
      // Redirect to register in /products/form/register
      this.props.history.push("/categories/form/register");
    });
  }
    render() {
        return (
            <div>
                <nav class="navbar navbar-dark bg-dark center">
                    <div className="NavForms2">Categorias</div>
                </nav>
                <div className="Posicion1">
                    <div className="Posicion2">
                        <div className="Posicion3">
                            <div class="container">
                                <div class="row">
                                    <div class="col-12">
                                        <div className="SelectForms">
                                        <input
                                            class="form-control form-control-lg"
                                            type="text"
                                            name="category"
                                            placeholder="Nombre de la categoria"
                                            onChange={(e) => this.form2val(e.target)}
                                        />
                                        </div>
                                        <div className='row'>
                                            <div class='col-3'>
                                                <Link to="/">
                                                    <button onClick={() => this.register()} type="button" className="btn btn-dark">Crear</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
} export default CategoryAdd;
