//ENRUTAMIENTO

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";


import NoExiste from '../pages/NoExiste';
import InicioSesion from '../pages/InicioSesion'
import MenuProductos from '../pages/MenuProductos'
import RegistroUsuarios from '../pages/RegistroUsuarios'
import ConsultaProductos from '../pages/ConsultaProductos'
import RegistroClientes from '../pages/RegistroClientes'
import AltaProductos from '../pages/AltaProductos'


function Rutas(){
  return(
    
      <BrowserRouter> 
            <Switch>     
            <Route exact path="/" component={MenuProductos}/>
            <Route exact path="/InicioSesion" component={InicioSesion}/> 
            <Route exact path="/RegistroUsuarios" component={RegistroUsuarios}/>
            <Route exact path="/ConsultaProductos" component={ConsultaProductos}/>
            <Route exact path="/RegistroClientes" component={RegistroClientes}/>
            <Route exact path="/AltaProductos" component={AltaProductos}/>
            <Route component={NoExiste}/>
            </Switch>    
      </BrowserRouter>
  ) 
}
export default Rutas
