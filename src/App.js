import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import ContactMe from './Components/ContactMe';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/ContactMe' Component={ContactMe}/>

        </Routes>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
