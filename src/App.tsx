import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Newsfeed from './features/newsfeed/routes/Newsfeed';

function App() {
  return (
    <>
      <Navbar />
      <Newsfeed />
    </>
  );
}

export default App;
