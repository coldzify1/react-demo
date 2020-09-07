import 'babel-polyfill'; 
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';


import './index.css';
import FrontendApp from './frontend/FrontendApp';
import BackendApp from './backend/BackendApp';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter,Route,Switch } from 'react-router-dom';


ReactDOM.render(
    
        <BrowserRouter>
        <Switch>
            
            <Route  exact path="/" component={FrontendApp} />
            <Route  exact path="/backend" component={BackendApp} /> 
            
        </Switch>
        
            
        </BrowserRouter>  
   


, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
