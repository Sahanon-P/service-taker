import React from 'react';
import NavBar from './component/nav_bar/NavBar';
import Body from './component/home/Body';
// import Header from './component/home/Header'

function Home() {
  return (
    <div>
      <NavBar/>
      <Body/>
      {/* <Header/> */}
    </div>
  );
}

export default Home;
