import React from "react";
import TituloLost from '../components/TituloLost';
import ListaLost from "../components/ListaLost";

class LostArk extends React.Component{
    constructor(props){
        super(props)
        this.state={
            clases:  [
                {
                "imagen":"./fotos/BERSERKER.jpg",
                "nombre":"BERSERKER",
                "ataque":"MELE-CORTO",
                "drop":"btn btn-secondary dropdown-toggle btn-sm dropdown-toggle",
                "boton":"btn btn-info"
                },
                {
                "imagen":"./fotos/PALADIN.jpg",
                "nombre":"PALADIN",
                "ataque":"MELE-MEDIO",
                "drop":"btn btn-dark dropdown-toggle",
                "boton":"btn btn-secondary"
                },
                {
                "imagen":"./fotos/ARTILLERO.jpg",
                "nombre":"ARTILLERO DE LANZA",
                "ataque":"MELE-LARGO",
                "drop":"btn btn-info dropdown-toggle",
                "boton":"btn btn-dark"
                }
                    ]
        }
    }
    render(){
        return(
            <div>
                <div>
                    <TituloLost
                        faccion="Guerreros"
                    />
                </div>

                <div>
                    <ListaLost
                        lostclases={this.state.clases}
                    />
                </div>
                
            </div>
        )
    }
}
export default LostArk