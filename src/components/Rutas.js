import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import CategoriesTable from '../pages/CategoriesTable';
import CategoriesAdd from '../pages/CategoriesAdd';



function Rutas(){
  return(
    
      <BrowserRouter> 
            <Switch>
            <Route exact path="/CategoriesTable" component={CategoriesTable}/> {/*  RESPOSIVO/CSS   */}
            <Route exact path="/CategoriesAdd" component={CategoriesAdd}/>     {/*  RESPOSIVO/CSS*   */}

        

           
            
            </Switch>    
      </BrowserRouter>
  ) 
}
export default Rutas
