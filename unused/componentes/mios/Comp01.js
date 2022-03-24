import React from 'react';
import coca from '../fotos/coca.jpg'
import sr from '../fotos/sr.png'
import './estilos/Comp01.css'

class Comp01 extends React.Component{

    render(){
        return(
            <div class="card" className='cardprincipal'>
                <div class="row">
                    <div class="col-sm-1" />
                    <div class="col-sm-7">
                        <div class="card" className='cardsecundaria'>
                            <div class="card-body">
                                <div className="">
                                    <img src={coca} className="coca" alt="coca" />
                                </div>
                                <div className='fondotexto1'>
                                    <div>Nombre empresa: Coca cola  </div>
                                    <div>Teléfono: 7221199108       </div>
                                    <div>Estado: México             </div>
                                </div>
                                <div className='fondoblanco'> 
                                    <div class="alert alert-dark"  role="alert">
                                        Warning: Empresa pendiente de pago
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card" className='cardterciaria'>
                            <div class="card-body">
                                <div className='fondotexto2'>Contacto: Speedy Gonzales</div>
                                <div className="">
                                    <img src={sr} className="sr" alt="sr" />
                                </div>
                                <div className='boton'>
                                    <button type='button' class='btn btn-dark' > Detalle empresa </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-1" />
                </div>
            </div>
        )
    }
}

export default Comp01