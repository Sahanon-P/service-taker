import React from 'react';
import Login from './component/Authentication/Login'
import Register from './component/Authentication/Register'
import {AuthProvider} from "./contexts/AuthContext"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PrivateRoute from "./PrivateRoute";
import Home from './Home'
import ReserveList from './ReservationList'
import Contact from './Contact'
import Reservation from './Reservation';


function App() {
    return (
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path="/" component = {Home}/>
                <Route path="/signup" component={Register}/>
                <Route path="/login" component ={Login}/>
                <Route path="/detail" component ={ReserveList}/>
                <Route path="/contact" component = {Contact} />
                <Route path="/reservation" component ={Reservation}/>
              </Switch>
            </AuthProvider>
          </Router>
    );
}

export default App;