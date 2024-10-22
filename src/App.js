import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Compoclass from './components/Compoclass'
import Example from './components/Compoclass';
import { Userprops } from './components/Userprops';
import FunctionClick from './components/EventHandling/FunctionClick';
import ClassClick from './components/EventHandling/ClassClick';
import Header from './components/LoginLogout/LoginLogout';
import AllSitesRouting from './components/Sites/AllSitesRouting';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom'; // Keep this line or the next
// import { Routes, Route } from 'react-router-dom'; // Remove this line
import Mainpage from './components/Sites/Mainpage';
import Carrer from './components/Sites/Carrer';
import KnowUs from './components/Sites/KnowUs';
// import Dashboard from './components/Sites/Dashboard';
import ContactUs from './components/Sites/ContactUs';
import NotFoundPage from './components/Sites/NotFoundPage';
import Users from './components/Sites/Users';
import UsersDetails from './components/Sites/UsersDetails';


// Lazy load the Dashboard component
const LazyDashboard = React.lazy(() => import('./components/Sites/Dashboard'));

//import Example from './components/Compoclass'



// function App() {
  
// let data="Vershaflex India prvt Ltd Hyderabad"
//   return (
//     <>
//     <Home/>
//       <h1>Vershaflex Frontend role</h1>
//       <h3>way to better growth</h3>
//       <p>{data}</p>
//       <p>{100+500}</p>

//     </>
//   )
// }




// let App = () =>{
//   return(
//     <div>
//       <Home></Home>
//       <h1>Welcome to VersaFlex</h1>
//       <p>for the front and back-end role </p>
//     </div>
//   )
// }

// let data=[
//   {phn:101, exp:1, bloodgrp:"A+"},
//   {phn:121, exp:2, bloodgrp:"O+"},
//   {phn:125, exp:3, bloodgrp:"A-"},
//   {phn:111, exp:2, bloodgrp:"O-"}

// ];



let App=function(){
  //console.log(Example)
  const [counter, setCounter] = useState(0); // Using useState for state management
  const updateCounter = () => {
    setCounter(counter + 1); // This will update the state and trigger re-render
  };

  return(
    <div>

      
      

      {/* <BrowserRouter>
            <AllSitesRouting/>

      </BrowserRouter> */}
        
        <BrowserRouter>
            <AllSitesRouting/>
            <Routes>
                  <Route path="/" element={<Mainpage />} />
                  <Route path="/knowus" element={<KnowUs />} />
                  <Route path="/carrer" element={<Carrer />} />
                  <Route path="/dashboard" element={<React.Suspense fallback='Loading...'>
                    <LazyDashboard />
                  </React.Suspense>} />
                  <Route path="/contactus" element={<ContactUs />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/users/:userId" element={<UsersDetails />} />
                  <Route path="*" element={<NotFoundPage />} />
            </Routes>

        </BrowserRouter>



        <h1>Counter Value: {counter}</h1>
      <button onClick={updateCounter}>Change</button>

       {/* <Header/> */}
      
      {/* <FunctionClick/>
      <ClassClick/>
      <Home/> */}
       {/* <Userprops phn={data.phn} exp={data.exp} bloodgrp={data.bloodgrp}/>  */}


      {/* <Userprops name="Sithu" id="VFX2099" age='21' address="Hyd" company="VersaFlex" />
      <Userprops name="Dharani" id="VFX2019" age='24' address="Hyd" company="VersaFlex" /> */}


      
      {/* <Example/> */}

      


      {/* <h2>Welcome to Versaflex India Prvt Ltd</h2>
      <p >for the better growth</p> */}
    </div>
  )
}

export default App
