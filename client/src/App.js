//General
import { Route } from 'react-router-dom';
import React from 'react';

//components
import Navbar from './components/Navbar';

//views
import Home from './views/Home';

//UI
import './styles/custom.scss';


//code..
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <Route>
    
      </Route> 
    </React.Fragment>
  );
}

export default App;
