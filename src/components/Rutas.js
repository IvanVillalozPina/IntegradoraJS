import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import CategoriesTable from '../pages/CategoriesTable';
import CategoriesAdd from '../pages/CategoriesAdd';
import CategoriesEdit from '../pages/CategoriesEdit';
import CategoriesDelete from '../pages/CategoriesDelete';

import ProductsTable from '../pages/ProductsTable';
import ProductsAdd from '../pages/ProductsAdd';
import ProductsEdit from '../pages/ProductsEdit';
import ProductsDelete from '../pages/ProductsDelete';
import ProductsDetail from '../pages/ProductsDetail';

import PaymentMethodsTable from '../pages/PaymentMethodsTable';
import PaymentMethodsAdd from '../pages/PaymentMethodsAdd';

import Home from '../pages/Home';

import NotFound from '../pages/NotFound';

import CustomersTable from '../pages/CustomersTable';
import CustomersAdd from '../pages/CustomersAdd';
import CustomersEdit from '../pages/CustomersEdit';
import CustomersDelete from '../pages/CustomersDelete';
import CustomersDetail from '../pages/CustomersDetail';

import SalesTable from '../pages/SalesTable';
import SalesAdd from '../pages/SalesAdd';
import SalesDelete from '../pages/SalesDelete';
import SalesDetail from '../pages/SalesDetail';

import UsersLogin from '../pages/UsersLogin';
import UsersTable from '../pages/UsersTable';
import UsersAdd from '../pages/UsersAdd';
import UsersDelete from '../pages/UsersDelete';

function Rutas(){
  return(
    
      <BrowserRouter> 
            <Switch>

            <Route exact path="/" component={Home} />

            <Route exact path="/CategoriesTable" component={CategoriesTable}/> {/*  RESPOSIVO/CSS   */}
            <Route exact path="/CategoriesAdd" component={CategoriesAdd}/>     {/*  RESPOSIVO/CSS   */}
            <Route exact path="/CategoriesEdit" component={CategoriesEdit}/>  {/*  RESPOSIVO/CSS**   */}
            <Route exact path="/CategoriesDelete" component={CategoriesDelete}/>  {/*  RESPOSIVO/CSS**   */}

            <Route exact path="/ProductsTable" component={ProductsTable}/>  {/*  RESPOSIVO/CSS   */}
            <Route exact path="/ProductsAdd" component={ProductsAdd}/>     {/*  RESPOSIVO/CSS   */}
            <Route exact path="/ProductsEdit" component={ProductsEdit}/>  {/*  RESPOSIVO/CSS**   */}
            <Route exact path="/ProductsDelete" component={ProductsDelete}/>  {/*  RESPOSIVO/CSS**   */}
            <Route exact path="/ProductsDetail" component={ProductsDetail}/>  {/*  RESPOSIVO/CSS**   */}

            <Route exact path="/PaymentMethodsTable" component={PaymentMethodsTable}/>  {/*  RESPOSIVO/CSS   */}

            <Route exact path="/CustomersTable" component={CustomersTable}/>  {/*  RESPOSIVO/CSS   */}
            <Route exact path="/CustomersAdd" component={CustomersAdd}/>     {/*  RESPOSIVO/CSS   */}
            <Route exact path="/CustomersEdit" component={CustomersEdit}/>  {/*  RESPOSIVO/CSS**   */}
            <Route exact path="/CustomersDelete" component={CustomersDelete}/>  {/*  RESPOSIVO/CSS**   */}
            <Route exact path="/CustomersDetail" component={CustomersDetail}/>  {/*  RESPOSIVO/CSS**   */}

            <Route exact path="/SalesTable" component={SalesTable}/>  {/*  RESPOSIVO/CSS   */}
            <Route exact path="/SalesAdd" component={SalesAdd}/>     {/*  RESPOSIVO/CSS   */}
            <Route exact path="/SalesDelete" component={SalesDelete}/>  {/*  RESPOSIVO/CSS**   */}
            <Route exact path="/SalesDetail" component={SalesDetail}/>  {/*  RESPOSIVO/CSS**   */}

            <Route exact path="/UsersLogin" component={UsersLogin}/>  {/*  RESPOSIVO/CSS   */}
            <Route exact path="/UsersTable" component={UsersTable}/>  {/*  RESPOSIVO/CSS   */}
            <Route exact path="/UsersAdd" component={UsersAdd}/>     {/*  RESPOSIVO/CSS   */}
            <Route exact path="/UsersDelete" component={UsersDelete}/>  {/*  RESPOSIVO/CSS**   */}

            <Route component={NotFound}/>  {/*  RESPOSIVO/CSS   */}
            </Switch>    
      </BrowserRouter>
  ) 
}
export default Rutas
