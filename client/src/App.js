//General
import { Route } from 'react-router-dom';
import React from 'react';

//components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//views
import Home from './views/Home';
import ModelSheet from './views/ModelSheet';

//UI
import './styles/custom.scss';


//code..
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Route exact path="/ego/" component={Home} />
      <Route exact path="/ego/ficha-de-modelo/:id?" component={ModelSheet} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
