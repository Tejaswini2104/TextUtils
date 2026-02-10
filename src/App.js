import React,{useState} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const[mode,setMode] = useState('light');
  const[alert,setAlert] = useState(null);
  const showAlert = (message, type) =>
  {
      setAlert(
        {
          msg:message, 
          type:type
        }
      );
      setTimeout(()=>{
        setAlert(null);
    },1500)
  };
  const toggleMode = () =>
  {
    //document.body.classList.add("bg-"+cls)
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#25354d';
      showAlert("Dark Mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light Mode has been enabled","success")
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/> 
    <div className='container my-3' >
    <Routes>
  <Route exact path="/about" element={<About />}/>
  <Route
    exact path="/"
    element={
      <TextForm
        showAlert={showAlert}
        heading="Try TextUtils - Word Counter, Character counter, Remove Extra spaces"
        mode={mode}
      />
    }
  />
  </Routes>
  </div>
  </Router>
</>
);
}
export default App;
