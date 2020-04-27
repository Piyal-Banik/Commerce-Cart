import React from 'react';
import './App.css';

import {Route, Switch} from 'react-router-dom';

import Navbar from './components/navbar/navbar.component';
import Footer from './components/footer/footer.component';
import HomePage from './pages/homepage/homepage.component';

function App() {
  return (
    <div>
      <Navbar />
      
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
