import Display from './component/Profile'
import { useState } from 'react'

function App() {
  const [userData, setUserData] = useState()
  return (
    <Display userData = {userData}/>
  );
}

export default App;
