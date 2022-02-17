import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages';
import { Footer, Navbar, ViewAllProducts } from './components';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='products' element={<ViewAllProducts />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
