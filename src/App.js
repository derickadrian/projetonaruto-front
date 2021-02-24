import './App.css';

import Header from './components/header';
import Footer from './components/footer';

import Routes from './routes';
import { BrowserRouter, Link } from 'react-router-dom';
import React , { Component } from 'react';
import "./style.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes/>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
