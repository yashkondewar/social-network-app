import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  import Technology from './components/Technology';
  import Politics from './components/Politics';
  import Food from './components/Food';
  import Sports from './components/Sports';
  import Economics from './components/Economics';
  import Header from './components/Header';
  import Register from './components/Register/Register';
  import Login from './components/Login/Login';
  
  function Router() {
    return (
      <div className="Router">
         <Router>
        {/* <Header/> */}
          <Routes>
          <Route path='/login' element={<Login/>} /> 
          <Route path='/register' element={<Register/>} /> 
  
            <Route path='/' element={<Home/>} /> 
            <Route path="/technology" element={<Technology/>}/>   
            <Route path="/politics" element={<Politics/>}/>  
            <Route path="/food" element={<Food/>}/>  
            <Route path="/sports" element={<Sports/>}/>  
            <Route path="/economics" element={<Economics/>}/>  
        </Routes>
  
     
        </Router>
      </div>
    );
  }
  
  export default Router;