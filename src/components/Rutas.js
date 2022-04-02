//ENRUTAMIENTO

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";


import NoExiste from '../pages/NoExiste';
import InicioSesion from '../pages/InicioSesion'
import MenuPrincipal from '../pages/MenuPrincipal'
import RegistroUsuarios from '../pages/RegistroUsuarios'
import ConsultaProductos from '../pages/ConsultaProductos'
import RegistroClientes from '../pages/RegistroClientes'
import AltaProductos from '../pages/AltaProductos'
import ProductDetail from '../pages/ProductDetail';
import CategoryEdit from '../pages/CategoryEdit';
import CategoryTable from '../pages/CategoryTable';
import CategoryDelete from '../pages/CategoryDelete';


function Rutas(){
  return(
    
      <BrowserRouter> 
            <Switch>     
            <Route exact path="/" component={MenuPrincipal}/>
            <Route exact path="/InicioSesion" component={InicioSesion}/> 
            <Route exact path="/RegistroClientes" component={RegistroClientes}/>

            <Route exact path="/RegistroUsuarios" component={RegistroUsuarios}/>
            <Route exact path="/ConsultaProductos" component={ConsultaProductos}/>
            <Route exact path="/AltaProductos" component={AltaProductos}/>
            <Route exact path="/ProductDetail" component={ProductDetail}/>
            <Route exact path="/CategoryEdit" component={CategoryEdit}/>
            <Route exact path="/CategoryTable" component={CategoryTable}/>
            <Route exact path="/CategoryDelete" component={CategoryDelete}/>
            <Route component={NoExiste}/>
            </Switch>    
      </BrowserRouter>
  ) 
}
export default Rutas
