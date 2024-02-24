import React, { Suspense, useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from './assets/vite.svg';
import './App.css';
const Dashboard=React.lazy(()=>import('./components/Dashboard'))
const Landing=React.lazy(()=>import('./components/Landing'))

import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <>
    
      <BrowserRouter>
      
      <Appbar></Appbar>
        <Routes>
          <Route path='/' element={<Suspense fallback="loading.."><Landing/></Suspense>
          }></Route>
          <Route path='/Dashboard' element={<Suspense fallback="loading..."><Dashboard/></Suspense> }/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Appbar(){
  const navigate=useNavigate();
  return(
    <div>
      <button onClick={()=>{navigate('/Dashboard')}}>Dashboard</button>
      <button onClick={()=>
        // {window.location.href="/"}
        {navigate('/')}
        }>Landing</button>
    </div>
  )
}

export default App;