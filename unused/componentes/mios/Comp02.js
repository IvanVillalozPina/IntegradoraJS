import React from 'react';
import iconC from '../fotos/IconC.png'
import katarina from '../fotos/katarina.jpg'
import noxus from '../fotos/noxus.png'
import swain from '../fotos/swain.jpg'
import vladimir from '../fotos/vladimir.jpg'
import ivan from '../fotos/ivan.jpg'
import vladback from '../fotos/vlad.jpg'
import './estilos/Comp02.css'

class Comp02 extends React.Component{
    render (){
        return (
            <body className='cuerpo' >


                <div class="row">
                    <div class="col-sm-1"></div>

                    <div class="col-sm-2" >
                        <div class="card text-white bg-dark mb-3">
                        <div className='UltimaCard'>
                            <div class="card-body">
                                <div className='relacionados'>Relacionados</div>
                                <div className="">
                                    <img src={katarina} className="ImgPrimerColumna" alt="katarina" />
                                </div>
                                <div className="">
                                    <img src={swain} className="ImgPrimerColumna" alt="swain" />
                                </div>
                                <div className="">
                                    <img src={ivan} className="ImgPrimerColumna" alt="kat" />
                                </div>
                            </div>
                        </div>
                        </div>

                    </div>

                    <div class="col-sm-6">
                        <div class="card text-white bg-dark mb-3">
                        <div className='trasnparente'>
                            <div class="card-body">
                                <div className="">
                                    <img src={vladimir} className="ImgVladimir" alt="vladimir" />
                                </div>
                                <div className='relacionados'>El tiempo me ha hecho más sabio, pero no más paciente.</div>
                                <div className='TextVladimir'>~ Vladimir</div>

                            </div>
                        </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="card text-white bg-dark mb-3" >
                                    <div className='vladback'>
                                        <div class="card-body" >
                                            <p class="text-sm-center" >
                                                Vladimir, un demonio con sed de sangre mortal,
                                                ha influenciado la política de Noxus desde los
                                                primeros días del imperio. Además de extender
                                                su vida de manera artificial, su maestría de
                                                la hematomancia le permite controlar las mentes
                                                y cuerpos de otros tan fácilmente como los propios.
                                                En las extravagantes salas de la aristocracia de Noxus,
                                                esto le permitió hacerse de una fama y personalidad a su
                                                alrededor mientras que, en los callejones más bajos, le
                                                permite desangrar a sus enemigos hasta la última gota.
                                            </p>
                                            <div className='botonmedio'>
                                            <button type='button' class='btn btn-dark'> Leer biografía  </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-2">
                        <div class="card text-white bg-dark mb-3">
                            <div className='UltimaCard'>
                                <div class="card-body">

                                    <div>
                                        <img src={noxus} className="Imgnoxus" alt="noxus" />
                                    </div>
                                    <div className='relacionados'>Noxus</div>
                                    <div className='cajastexto'>
                                        <input type='text' class='form-control' placeholder='Buscar campeón' />
                                        <div className='cajastexto'></div>
                                        <input type='text' class='form-control' placeholder='Explorar región' />
                                        <div className='relacionados'>Descargar league of legends</div>
                                            <div className='botondescargar'>
                                            <button type='button' class='btn btn-primary'> Descargar  </button>
                                            </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-1" ></div>
                </div>


            </body>
        )
    }
}

export default Comp02

