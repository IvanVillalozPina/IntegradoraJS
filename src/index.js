import React from 'react';
import 'bootstrap';
import 'bootstrap/js/dist/modal';
import 'bootstrap/dist/css/bootstrap.min.css';


import ReactDOM from 'react-dom';

import Rutas from './components/Rutas';


const elemento = ( 
    <div><Rutas/></div>
 )


const container = document.getElementById('root')
ReactDOM.render(elemento,container)   // Para especificar que es un componente < 'nombre de la clase' />