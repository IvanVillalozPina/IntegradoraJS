import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/js/dist/modal';
import Eliminar1 from "../pictures/eliminar1.jpg";
import Eliminar2 from "../pictures/eliminar2.jpg";
import Eliminar3 from "../pictures/eliminar3.jpg";

class Carrusel extends React.Component {
  render() {
    return (
      <div id="carouselIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={Eliminar1} class="d-block w-100" alt="1"/>
        </div>
        <div class="carousel-item">
          <img src={Eliminar2} class="d-block w-100" alt="2"/>
        </div>
        <div class="carousel-item">
          <img src={Eliminar3} class="d-block w-100" alt="3"/>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Anterior</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Siguiente</span>
      </button>
    </div>
    );
  }
}
export default Carrusel;
