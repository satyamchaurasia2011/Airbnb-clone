import React from 'react';
import './App.css';
import Home from './Home.js';
import Header from './Header.js';
import Footer from './Footer';
import { BrowserRouter as Router, Switch,
Route} from "react-router-dom";
import SearchPage from './SearchPage';
function App() {
  return (
    <div className="app">
       <Router>
        <Header />
          <Switch>
            <Route path="/search"><SearchPage /></Route>
            <Route path="/"><Home /></Route> 
          </Switch>
     
      <Footer />
      </Router>
    </div>
  );
}

export default App;
