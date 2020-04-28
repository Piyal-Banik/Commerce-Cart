import React from 'react';
import './App.css';

import {Route, Switch} from 'react-router-dom';

import Navbar from './components/navbar/navbar.component';
import Footer from './components/footer/footer.component';
import HomePage from './pages/homepage/homepage.component';
import AboutPage from './pages/aboutpage/aboutpage.component';

function App() {
  return (
    <div>
      <Navbar />
      
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/about' component={AboutPage} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
