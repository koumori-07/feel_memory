import React from 'react';
import Header  from './components/Header/Header'
import Router from "./Router";
import "./index.css"
const App = () => {

  return (
    <>
        <Header />
      <div className="main">
        <Router />
      </div>
    </>
  );
};

export default App;