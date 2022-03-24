//ENRUTAMIENTO

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";


import NoExiste from '../pages/NoExiste';
import InicioSesion from '../pages/InicioSesion'
import MenuProductos from '../pages/MenuProductos'



function Rutas(){
  return(
    
      <BrowserRouter> 
            <Switch>     
            <Route exact path="/" component={InicioSesion}/> 
            <Route exact path="/MenuProductos" component={MenuProductos}/>
            <Route component={NoExiste}/>
            </Switch>    
      </BrowserRouter>
  ) 
}
export default Rutas
