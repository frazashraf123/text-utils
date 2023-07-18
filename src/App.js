//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Aler from './component/Aler'; 
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";

function App() { 
  const [mode,setdarkMode] = useState('light'); //whether dark mode is enabled or not  
  const[alert,setAlert] = useState(null)

  const showAlert = (message,type) => {
    setAlert({
      msg:message,
      type:type
    }) 
    setTimeout(()=> {
      setAlert(null);
    },1500)
  }

  const toggleMode =() => {
    if(mode === 'light')
    {
      setdarkMode('dark'); 
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled","success"); 
      document.title = 'TextUtils - DarkMode'
    } 
    else 
    {
      setdarkMode('light'); 
      document.body.style.backgroundColor='white'; 
      showAlert("Light mode is enabled","success");    
      document.title = 'TextUtils - LightMode'
    }
  }
  return (
      <> 
      <Navbar title="TextUtils" aboutText = "About Us" mode={mode} toggleMode={toggleMode}></Navbar>
      <Aler alert={alert} />
      {/* <Router>
      <Navbar title="TextUtils" aboutText = "About Us" mode={mode} toggleMode={toggleMode}></Navbar>
      <Aler alert={alert} />
      <div className="container my-3">
      <Routes>
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact  path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes> */} 
        <div className="container my-3">   
          <TextForm showAlert = {showAlert} heading = "Enter the text below" mode={mode}/>
        </div>
        {/* <About></About> */}
      
      {/* </Router> */}
    </>
  );
}

export default App;
