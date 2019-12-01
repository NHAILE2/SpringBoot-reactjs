import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Catagory from './Catagory'
import AppNav from './AppNav'
import Home from './Home'
import Expenses from './Expenses'
function App() {



  return (
    <div className="App">
     <Router>

      <AppNav/>
      <Switch>
      <Route exact path='/catagory' component={Catagory}/>
      <Route  path='/home' component={Home} />
      <Route  path='/expenses' component={Expenses} />
      </Switch>
     
     </Router>
     
      
    </div>
  );
}

export default App;
