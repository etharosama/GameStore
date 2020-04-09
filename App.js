import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Switch,Route} from "react-router-dom";

import NavBar  from './compounts/NavBar.js'
import Details  from './container/Details.js'
import Card  from './container/Card.js' //src\container\Card.js
import Defulte  from './compounts/Defulte.js'
import ProductList from './container/ProductList.js'
import Model from './container/Model.js'//src\container\Model.js

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path= '/' render={()=><ProductList/>}/>
        <Route exact path= '/details/:id' render={()=><Details/>}/>
        <Route exact path= '/Cart' render={(router)=><Card {...router}/>}/>
        <Route  path="*" render={(router)=><Defulte {...router}/>}/>
      </Switch>
      <Model/>
    </div>
  );
}

export default App;

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
