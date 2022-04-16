import React from 'react';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

import 'bootstrap/js/dist/modal';




import ReactDOM from 'react-dom';

import Rutas from './components/Rutas';


const elemento = ( 
    <div><Rutas/></div>
 )


const container = document.getElementById('root')
ReactDOM.render(elemento,container) 