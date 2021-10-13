import Profile from './component/Profile'
import { useState } from 'react'

function App() {
  const [userData, setUserData] = useState()
  return (
    <Profile userData = {userData}/>
  );
}

export default App;
