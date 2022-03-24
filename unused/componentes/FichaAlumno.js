import React from 'react';
import './estilos/FichaAlumno.css'

class FichaAlumno extends React.Component {
    render() {
        const { nomalu, terminofrase, escribe, colorfondo, foto, tipomen } = this.props
        return (
            <div className="ficha">
                <div className="bordeazul">
                    <div className="divfoto">
                        <img src={foto} className="fotito" alt="vlad" />
                    </div>
                    <div className="infoalu" style={{
                        backgroundColor: `${colorfondo}`
                    }}>
                        <div className="detalle">
                            {nomalu}
                        </div>
                    </div>
                    <div className="alert alert-primary" role="alert">
                        {terminofrase}
                        <input type='text' class='form-control' placeholder={escribe} />
                    </div>
                    <div>
                        <button type='button' class={tipomen}> Ver detalle </button>
                    </div>
                </div>
            </div>
        )
    }

}

export default FichaAlumno