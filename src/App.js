
import React from 'react';
import Login from './component/login'
import Register from './component/register'
import NavBar from './component/NavBar';

function App() {
  return (
    <div>
      <NavBar/>
      <div className='container'>
        <Register/>
      <Login/>
      </div>
    </div>

  );
}

export default App;
