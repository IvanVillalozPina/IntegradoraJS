import React from "react";
import './estilos/QuienSoy.css'
import ivan from '../fotos/ivan2.jpeg'

class InicioComponente extends React.Component {
  render() {
    return (
    <div className="jumbotronQuien">
        <div class="jumbotron">
          <h1 class="display-4">¿Quién soy?</h1>
          <div>
            <img src={ivan} className="imagenQuienSoy" alt="Ivan" />
          </div>
          <hr class="my-4" />
          <hr class="mx-4" />
        <div class='row'>
            <div class='col-6'>
                <div className="textosQuienSoyIzquierda">
                <div>Nombre completo: Iván Villalóz Piña</div>
                <div>Edad: 20 años</div>
                <div>Fecha de nacimiento: 17/01/2001</div>
                </div>
            </div>
            <div class='col-6'>
            <div className="textosQuienSoyDerecha">
            <div>Me gustan los videojuegos, mi favorito es League of Legends.</div>
            <div>Tambien disfruto de otros titulos como LOSTARK.</div>
            <div>Me gusta salia a pasear con mis perras Akaly y Osa.</div>    
            <div>Disfruto la compañia de mis seres queridos.</div>     
            </div>
            </div>
        </div>
        <hr class="mx-4" />
        <hr class="my-4" />
        
        <div class='row'>
            <div className="textosQuienSoyMedio">
                ¿Qué me gusta de la UTVT?
                <div>Los maestros que se esfuerzan en enseñar</div>
                <div>Los buenos compañeros</div>
            </div>
        </div>
        <hr class="mx-4" />
        </div>
    </div>
    );
  }
}
export default InicioComponente;
