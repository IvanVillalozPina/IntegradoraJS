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


function Rutas(){
  return(
    
      <BrowserRouter> 
            <Switch>
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
            <Route exact path="/PaymentMethodsAdd" component={PaymentMethodsAdd}/>     {/*  RESPOSIVO/CSS   */}


        

           
            
            </Switch>    
      </BrowserRouter>
  ) 
}
export default Rutas
