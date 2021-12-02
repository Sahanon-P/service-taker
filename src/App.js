import React from 'react';
import Login from './component/Authentication/Login'
import Register from './component/Authentication/Register'
import {AuthProvider} from "./contexts/AuthContext"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PrivateRoute from "./PrivateRoute";
import Home from './Home'
import RegisterPage from './component/Register/RegisterPage'
import Contact from './Contact'
import Reservation from './Reservation';
import Walkin from './Walkin';


function App() {
    return (
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path="/" component = {Home}/>
                <Route path="/signup" component={Register}/>
                <Route path="/login" component ={Login}/>
                <Route path="/detail" component ={RegisterPage}/>
                <Route path="/contact" component = {Contact} />
                <Route path="/walkin" component = {Walkin} />
                <Route path="/reservation/:id" children ={<Reservation/>}/>
              </Switch>
            </AuthProvider>
          </Router>
    );
}

export default App;