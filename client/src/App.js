import React from 'react';
import './App.css';

import Navbar from './components/navbar/navbar.component';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <div>
      <Navbar />
      <div className='content'></div>
      <Footer />
    </div>
  );
}

export default App;
