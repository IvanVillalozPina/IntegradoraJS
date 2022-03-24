import React from 'react'; 
import Titulocarrera from '../components/Titulocarrera';
import Listaalumnos from "../components/Listaalumnos";

class Reportealumnos extends React.Component{
    constructor(props){
        super(props)
        this.state={
            datos:  [
            {
                "nomalu": "Swain",
                "terminofrase": "Estoy rodeado de incompetentes",
                "foto"  :"fotos/swain.png",
                "colorfondo": "Green"
            },
                {
                "nomalu": "Vladimir",
                "terminofrase": "Rojos se tornaran los rios",
                "foto"  :"fotos/vlad.jpg",
                "colorfondo": "Red"
                },
                {
                    "nomalu": "Katarina",
                    "terminofrase": "No corras... No veras como te apuñalo",
                    "foto"  :"fotos/kata.png",
                    "colorfondo": "Gray"
                    }
                    ]
        }
    }
    render(){
        return(
            <div>
                <div>
                    <Titulocarrera
                        carrera="LoL"
                    />
                </div>
                <div>
                    <Listaalumnos
                        detallealum={this.state.datos}
                    />
                </div>
                <div>
                <a href='/Altaalumno' className='btn btn-primary streched-link'>Alta de alumno</a>   
                </div>
            </div>
        )
    }
}
export default Reportealumnos

/*
<FichaAlumno
nomalu={this.state.nomalu}
carrera={this.state.carrera}
escribe="Ingresa tu maestria"
foto={this.state.foto}
colorfondo={this.state.colorfondo}
tipomen="alert alert-danger"
/>
*/// STATE SIMPLE