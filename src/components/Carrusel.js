import React from "react";
import E1 from '../pictures/eliminar1.jpg'
import E2 from '../pictures/eliminar2.jpg'
import E3 from '../pictures/eliminar3.jpg'

class Carrusel extends React.Component {
    render() {
        return (
            <div>
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src={E1} alt="First slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={E2} alt="Second slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={E3} alt="Third slide" />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }
}
export default Carrusel;