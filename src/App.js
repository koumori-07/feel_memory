import React from 'react';
import Header  from './components/Header'
import Router from "./Router";
import "./index.css"
const App = () => {

  return (
    <>
        <Header />
      <div >
        <Router />
      </div>
    </>
  );
};

export default App;