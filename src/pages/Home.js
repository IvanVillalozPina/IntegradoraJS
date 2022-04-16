import React from 'react';
import NavbarHome from '../components/NavbarHome';
import Carrusel from '../components/Carrusel';
import '../components/styles/Home.css';



class Home extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <NavbarHome />
                    <Carrusel />
                </div>
                <br />
                <center>
                    <h1>
                        ¡Bienvenido a Casa Montero!
                    </h1>
                    <h4>
                        En Casa Montero encontrarás productos de alta calidad
                    </h4>
                </center>
                <br />
                <div className='cardHome'>
                    <center>
                        <div class="row align-items-start">
                            <div class="col-3">
                                <div class="card" >
                                    <img src="..." class="card-img-top" alt="producto" />
                                    <div class="card-body">
                                        <h5 class="card-title">Producto X</h5>
                                        <p class="card-text">Descripción</p>
                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Precio</li>
                                    </ul>
                                    <div class="card-body">
                                        <a href="/SalesAdd" class="btn btn-success ">Comprar</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="card" >
                                    <img src="..." class="card-img-top" alt="producto" />
                                    <div class="card-body">
                                        <h5 class="card-title">Producto X</h5>
                                        <p class="card-text">Descripción</p>
                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Precio</li>
                                    </ul>
                                    <div class="card-body">
                                        <a href="/SalesAdd" class="btn btn-success ">Comprar</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="card" >
                                    <img src="..." class="card-img-top" alt="producto" />
                                    <div class="card-body">
                                        <h5 class="card-title">Producto X</h5>
                                        <p class="card-text">Descripción</p>
                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Precio</li>
                                    </ul>
                                    <div class="card-body">
                                        <a href="/SalesAdd" class="btn btn-success ">Comprar</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="card" >
                                    <img src="..." class="card-img-top" alt="producto" />
                                    <div class="card-body">
                                        <h5 class="card-title">Producto X</h5>
                                        <p class="card-text">Descripción</p>
                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Precio</li>
                                    </ul>
                                    <div class="card-body">
                                        <a href="/SalesAdd" class="btn btn-success ">Comprar</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                    </center>
                </div>

                



            </div>
        )
    }
}
export default Home;