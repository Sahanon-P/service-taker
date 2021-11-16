import React from 'react';
import Login from './component/Authentication/Login'
import Register from './component/Authentication/Register'
import {Container} from "react-bootstrap"
import {AuthProvider} from "./contexts/AuthContext"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PrivateRoute from "./PrivateRoute";
import Home from './Home'

function App() {
    return (
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path="/" component = {Home}/>
                <Route path="/signup" component={Register}/>
                <Route path="/login" component ={Login}/>
              </Switch>
            </AuthProvider>
          </Router>
    );
}

export default App;