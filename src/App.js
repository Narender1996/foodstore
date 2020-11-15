import React from "react";
import "./styles/App.css";
import Home from './component/pages/home';
import Addproduct from './component/products/addproduct'
import Editproduct from './component/products/editproduct'
import {BrowserRouter,Switch,Route} from 'react-router-dom';

function App() {
  return (
    
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/addproduct" component={Addproduct} />
    <Route exact path="/editproduct/:id" component={Editproduct} />
    </Switch>
    
    </BrowserRouter>
  );
}

export default App;
