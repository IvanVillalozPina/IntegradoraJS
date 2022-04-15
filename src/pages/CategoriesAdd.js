import React from 'react';
import { Link } from "react-router-dom";
import '../components/styles/CategoriesAdd.css'

class CategoriesAdd extends React.Component {

    state = {
        id_canal: '',
        nombre_canal: '',
        correo: '',
        numero_telefono: '',
        horas: '',
        suscripciones: '',
        anuncios: '',
        salario: '',
        foto: '',
        categorias: [],
        metodos_pago: [],

        resultado: '',

    }

    campoChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    subForm = (e) => {
        e.preventDefault();
        let data = {
            id_canal: this.state.id_canal,
            nombre_canal: this.state.nombre_canal,
            correo: this.state.correo,
            numero_telefono: this.state.numero_telefono,
            horas: this.state.horas,
            suscripciones: this.state.suscripciones,
            anuncios: this.state.anuncios,
            salario: this.state.salario,
            foto: this.state.foto,
            id_categoria: this.state.id_categoria,
            id_metodo_pago: this.state.id_metodo_pago,
        }

        fetch('http://127.0.0.1:8000/api/CrearCanal', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            mode: 'cors',
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(response => this.setState({ resultado: "¡Creación de canal exitosa!" })

            )
    }

    /*------------------------------------CATEGORIAS----------------------------------------------*/
    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/MostrarCategorias')
            .then(response => response.json())  //convertir la respuesta a json
            .then(categoriasJson => this.setState({ categorias: categoriasJson }))
        /*------------------------------------METODOS----------------------------------------------*/
        fetch('http://127.0.0.1:8000/api/MostrarMetodos')
            .then(response => response.json())  //convertir la respuesta a json
            .then(metodos_pagoJson => this.setState({ metodos_pago: metodos_pagoJson }))
    }

    render() {

        const { categorias, metodos_pago } = this.state;

        return (
            <div className='divi1'>
                <div className='divi2'>
                    <center>
                        <div class="card border-dark mb-3">
                            <div class="card-header"> <h1>Creación de canal</h1> </div>
                            <div class="card-body">
                                <div>
                                    <form onSubmit={this.subForm} >
                                        Clave del canal <br /> <input className='input-group-text' type='text' name='id_canal'
                                            onChange={this.campoChange}
                                        />
                                        <br />
                                        Nombre del canal <br /> <input className='input-group-text' type='text' name='nombre_canal'
                                            onChange={this.campoChange}
                                        />
                                        <br />
                                        Correo <br /> <input className='input-group-text' type='email' name='correo'
                                            onChange={this.campoChange}
                                        />
                                        <br />
                                        Numero de telefono <br /> <input className='input-group-text' type='number' name='numero_telefono'
                                            onChange={this.campoChange}
                                        />
                                        <br />
                                        Horas emitidas <br /> <input className='input-group-text' type='number' name='horas'
                                            onChange={this.campoChange}
                                        />
                                        <br />
                                        Suscripciones <br /> <input className='input-group-text' type='number' name='suscripciones'
                                            onChange={this.campoChange}
                                        />
                                        <br />
                                        Anuncios <br /> <input className='input-group-text' type='number' name='anuncios'
                                            onChange={this.campoChange}
                                        />
                                        <br />
                                        Salario <br /> <input className='input-group-text' type='number' name='salario'
                                            onChange={this.campoChange}
                                        />
                                        <br />
                                        Foto <br /> <input className='input-group-text' type='text' name='foto'
                                            onChange={this.campoChange}
                                        />
                                        <br />
                                        Categoria <br />
                                        <select name='id_categoria'
                                        className='input-group-text'
                                            onChange={this.campoChange}
                                        >
                                            <option value='0'>Seleccione una categoria</option>
                                            {categorias.map((categorias, i) =>
                                                <option value={categorias.id_categoria} key={i} > {categorias.categoria} </option>
                                            )}
                                        </select>
                                        <br />
                                        Metodo de pago <br />
                                        <select name='id_metodo_pago'
                                        className='input-group-text'
                                            onChange={this.campoChange}
                                        >
                                            <option value='0'>Seleccione un metodo de pago</option>
                                            {metodos_pago.map((metodos_pago, i) =>
                                                <option value={metodos_pago.id_metodo_pago} key={i} > {metodos_pago.metodo} </option>
                                            )}
                                        </select>
                                        <br />
                                        <input className='btn btn-dark' type='submit' value='Crear canal' />
                                    </form>
                                </div>

                                <br />
                                <div>
                                    {this.state.resultado
                                        ? <div className='alert alert-success'>{this.state.resultado}</div>
                                        : <div></div>
                                    }
                                </div>
                                <Link to="/" >
                                    <button type='button' className="btn btn-secondary">Regresar</button>
                                </Link>
                            </div>
                        </div>
                    </center>
                </div>
            </div>

        )
    }
} export default CategoriesAdd;