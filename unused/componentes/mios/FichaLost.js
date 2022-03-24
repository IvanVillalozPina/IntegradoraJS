import React from 'react';
import './estilos/FichaLost.css'

class FichaLost extends React.Component {
    render() {
        const { imagen, nombre, ataque, drop, boton } = this.props
        return (
            <div class="card" className='card1LOST'>
                <div class="row">
                    <div class="col-sm-3">
                        <div class="card" className='card2LOST'>
                            <div class="card-body">
                                <div className="fotoLOST">
                                    <img src={imagen} className="fotoLOST2" alt='imagen' />
                                </div>
                                <div >
                                    <div className='texto1LOST'>{nombre} </div>
                                    <div className='texto2LOST'>{ataque} </div>
                                </div>
                                <div className='botonLOST' >
                                    <div type="button" class={boton}>
                                        Más información
                                    </div>
                                </div>
                                <div className='dropLOST'>
                                    <div class="dropdown">
                                        <button class={drop} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Otras clases
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                            <a class="dropdown-item" href="#">Peleadores</a>
                                            <a class="dropdown-item" href="#">Pistoleros</a>
                                            <a class="dropdown-item" href="#">Magos</a>
                                            <a class="dropdown-item" href="#">Asesinos</a>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FichaLost