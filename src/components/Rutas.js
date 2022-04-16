import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import CategoriesTable from '../pages/CategoriesTable';
import CategoriesAdd from '../pages/CategoriesAdd';
import CategoriesEdit from '../pages/CategoriesEdit';
import CategoriesDelete from '../pages/CategoriesDelete';


function Rutas(){
  return(
    
      <BrowserRouter> 
            <Switch>
            <Route exact path="/CategoriesTable" component={CategoriesTable}/> {/*  RESPOSIVO/CSS   */}
            <Route exact path="/CategoriesAdd" component={CategoriesAdd}/>     {/*  RESPOSIVO/CSS   */}
            <Route exact path="/CategoriesEdit" component={CategoriesEdit}/>  {/*  RESPOSIVO/CSS**   */}
            <Route exact path="/CategoriesDelete" component={CategoriesDelete}/>  {/*  RESPOSIVO/CSS**   */}


        

           
            
            </Switch>    
      </BrowserRouter>
  ) 
}
export default Rutas
