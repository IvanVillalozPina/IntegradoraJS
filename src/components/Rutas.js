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
import ProductsTable  from '../pages/ProductsTable';
import ProductDelete from '../pages/ProductDelete';
import CustomerTable from '../pages/CustomerTable';
import DashAdmin from '../pages/DashAdmin';
import PaymentM from '../pages/PaymentM';

function Rutas(){
  return(
    
      <BrowserRouter> 
            <Switch>     
            <Route exact path="/AltaProductos" component={AltaProductos}/>

            <Route exact path="/CategoryDelete" component={CategoryDelete}/>
            <Route exact path="/CategoryEdit" component={CategoryEdit}/>
            <Route exact path="/CategoryTable" component={CategoryTable}/>

            <Route exact path="/ConsultaProductos" component={ConsultaProductos}/>

            <Route exact path="/CustomerTable" component={CustomerTable}/>

            <Route exact path="/InicioSesion" component={InicioSesion}/> 
            
            <Route exact path="/" component={MenuPrincipal}/>

            <Route exact path="/ProductDelete" component={ProductDelete}/>
            <Route exact path="/ProductDetail" component={ProductDetail}/>
            <Route exact path="/ProductsTable" component={ProductsTable}/>
           
            <Route exact path="/RegistroClientes" component={RegistroClientes}/>

            <Route exact path="/RegistroUsuarios" component={RegistroUsuarios}/>

            <Route exact path="/DashAdmin" component={DashAdmin}/>

            <Route exact path="/PaymentM" component={PaymentM}/>
          
            <Route component={NoExiste}/>
            </Switch>    
      </BrowserRouter>
  ) 
}
export default Rutas
