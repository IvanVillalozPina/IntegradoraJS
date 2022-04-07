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
import CategoryAdd from '../pages/CategoryAdd';
import CategoryTable from '../pages/CategoryTable';
import CategoryDelete from '../pages/CategoryDelete';
import ProductsTable  from '../pages/ProductsTable';
import ProductDelete from '../pages/ProductDelete';
import CustomerTable from '../pages/CustomerTable';
import DashAdmin from '../pages/DashAdmin';
import PaymentM from '../pages/PaymentM';
import Ticket from '../pages/Ticket';

function Rutas(){
  return(
    
      <BrowserRouter> 
            <Switch>
            <Route exact path="/" component={MenuPrincipal}/>

            <Route exact path="/products/form/register" component={AltaProductos}/> {/* NAV/SEMI-RESPONSIVO */}
            <Route exact path="/products/look" component={ConsultaProductos}/> {/* NAV/SEMI-RESPONSIVO */}
            <Route exact path="/products/delete" component={ProductDelete}/>
            <Route exact path="/products/detail" component={ProductDetail}/>
            <Route exact path="/products/list" component={ProductsTable}/>
           
            <Route exact path="/categories/delete" component={CategoryDelete}/>
            <Route exact path="/categories/form/register" component={CategoryAdd}/>
            <Route exact path="/categories/list" component={CategoryTable}/>

            <Route exact path="/customers/list" component={CustomerTable}/>
            <Route exact path="/customer/register" component={RegistroClientes}/>

            <Route exact path="/payment/list" component={PaymentM}/>
            <Route exact path="/sells/ticket" component={Ticket}/>
            
            <Route exact path="/user/login" component={InicioSesion}/> {/* OK/CSS/RESPONSIVO */}
            <Route exact path="/user/register" component={RegistroUsuarios}/> {/*OK*/}

            <Route exact path="/user/dash" component={DashAdmin}/>
            <Route component={NoExiste}/>
            </Switch>    
      </BrowserRouter>
  ) 
}
export default Rutas
