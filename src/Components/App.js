import React from 'react';
import Login from './Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {AuthProvider} from '../contexts/AuthContext'
import Chats from './Chats';
function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact  path="/" component={Login} />

            <Route exact path="/chats" component={Chats}/>
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
