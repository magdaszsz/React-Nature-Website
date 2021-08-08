import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Mountains from './pages/Mountains';
import Water from './pages/Water';
import Main from './pages/Main';
import Navbar from './components/Navbar';
import Tabs from './pages/Tabs';
import Select from './pages/SelectNumber';


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route path='/select' component={Select}/>
        <Route path="/tabs" component={Tabs}/>
        <Route path="/mountains" component={Mountains}/>
        <Route path="/water" component={Water}/>
      </Switch>
    </Router>
    </>
  )
}

export default App
