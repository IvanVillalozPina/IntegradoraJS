import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../components/styles/EstilosFormularios.css'
import NavBarPrincipal from "../components/NavBarPrincipal";
import axios from "axios";

class AltaProductos extends React.Component {
  // init state
  state = {
    categories:[],
    name: "",
    description: "",
    stock: "",
    price: "",
    reference: "",
    image: "",
    id_category: "",
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

  // function to register
  register(){
    axios.post(
      "http://127.0.0.1:8000/api/products/",
      {
        name: this.state.name,
        description: this.state.description,
        stock: this.state.stock,
        price: this.state.price,
        reference: this.state.reference,  
        image: this.state.image,
        id_category: this.state.id_category,
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
      this.props.history.push("/products/list");
    })
    .catch(err => {
      console.log(err);
      console.log(err.response);
      // Redirect to register in /products/form/register
      this.props.history.push("/products/form/register");
    });
  }

  render() {
    return (
      <div>
          <div>
          <NavBarPrincipal/>
        </div>
        <div className="TextsTittle">
        <h1 className="display-1">Alta de productos</h1>
        </div>
        <div className="Posicion1">
          <div className="Posicion2">
            <form className="Posicion3">
              <div class="container">
                <div class="row">
                  <div class="col">
                    <div className="MargenesTextsForms2">Nombre</div>
                    <input
                      class="form-control form-control-lg"
                      type="text"
                      name="name"
                      placeholder="Nombre del producto"
                      onChange={(e) => this.form2val(e.target)}
                    />
                    <div className="MargenesTextsForms1">
                      <div className="MargenesTextsForms2">Descripción</div>
                      <input
                        class="form-control form-control-lg"
                        type="text-box"
                        name="description"
                        placeholder="Descripción"
                        onChange={(e) => this.form2val(e.target)}
                      />
                    </div>
                    <div className="MargenesTextsForms1">
                      <div className="MargenesTextsForms2">Precio</div>
                      <input
                        class="form-control form-control-lg"
                        type="number"
                        name="price"
                        placeholder="Precio del producto"
                        onChange={(e) => this.form2val(e.target)}
                      />
                      <div className="MargenesTextsForms1">
                        <div className="MargenesTextsForms2">Cantidad</div>
                        <input
                          class="form-control form-control-lg"
                          type="number"
                          name="stock"
                          placeholder="Precio del producto"
                          onChange={(e) => this.form2val(e.target)}
                        />
                      </div>
                      <div className="MargenesTextsForms1">
                        <div className="MargenesTextsForms2">Referencia</div>
                        <input
                          class="form-control form-control-lg"
                          type="text-box"
                          name="reference"
                          placeholder="Referencia"
                          onChange={(e) => this.form2val(e.target)}
                        />
                      </div>
                    </div>
                    <div className="SelectForms">
                      <select
                        className="form-select form-select-sm form-select"
                        aria-label=".form-select-sm example"
                        name="id_category"
                        onChange={(e) => this.form2val(e.target)}
                      >
                        <option value="">Selecciona una categoría</option>
                        {
                          this.state.categories.map(category => (
                            <option value={category._id}>{category.category}</option>
                          ))
                        }
                      </select>
                    </div>
                    <div className="MargenesImgForms1">
                      <div class="form-group">
                        <label for="exampleFormControlFile1">
                          <div className="MargenesImgForms2">
                            Imagen del producto
                          </div>
                        </label>
                        <div>
                          <input
                            type="file"
                            class="form-control-file"
                            id="exampleFormControlFile1"
                            name="image"
                            onChange={(e) => this.form2val(e.target)}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="BotonForms1">
                          <button
                            type="button"
                            value="Submit"
                            class="btn btn-lg btn-dark"  
                            onClick={() => this.register()}
                          >
                            Crear
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default AltaProductos;
