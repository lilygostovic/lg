import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';

// importing components
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import OutOfClass from './pages/OutOfClass';


function App() {
  return (
    <BrowserRouter>

      <Switch>
    
        <Route path="/" component={Home} exact/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/out-of-class" component={OutOfClass}/>

      </Switch>

    </BrowserRouter>
  );
}

export default App;
