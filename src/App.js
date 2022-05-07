import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor="#031520";
      showAlert("Dark Mode has been enabled","success");
      // document.title='TextOperation-Dark Mode';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light Mode has been enabled","success");
    }
  }

  const showAlert=(message,type)=>{
      setalert({
          msg:message,
          type:type
      })
      setTimeout(() => {
        setalert(null);
      }, 1500);
  }
  return (
    <>
    <BrowserRouter>
        <Navbar title = "TextOperation" aboutText = "About Us" mode={mode} togglemode={togglemode}/>
        <Alert alert={alert}/>
    <div className="container my-3" > 
        <Routes>
            <Route exact path="/textoperation" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>}>
            </Route>  
            <Route exact path="/about" element={<About mode={mode}/>}>
            </Route>
        </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
