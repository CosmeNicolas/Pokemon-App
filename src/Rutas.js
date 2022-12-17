
import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Inicio from '/Inicio';
import Page2 from './Page2';

export default function Rutas ()  {
   return(
    
        
        <Router>
            
            <Route path="/" exact component={Inicio}/>
              
            
            <Route path="/Page2.js" exact component={Page2} /> 
                
            
            
        </Router>
 
    
   )
};

