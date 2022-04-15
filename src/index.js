import React from 'react';
import 'bootstrap';
import 'bootstrap/js/dist/modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'



import ReactDOM from 'react-dom';

import Rutas from './components/Rutas';


const elemento = ( 
    <div><Rutas/></div>
 )


const container = document.getElementById('root')
ReactDOM.render(elemento,container) 