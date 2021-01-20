
import React from "react";
import './App.css';
import { BrowserRouter as Router, StaticRouter as Static, Route} from 'react-router-dom';

import Blogs from './components/blogsList/Blogs';
import Header from './components/header/Header';
import BlogPage from './components/blogPage/BlogPage';

function App() {
  return (
    //  <Router>
    <div className="App"> 
    <Header/>
    <Route path="/" exact component={Blogs}/>
    <Route path="/:id/:blogtitleId" exact render={(props)=> <BlogPage {...props}/> }/>
    
    </div>
    //  </Router>
    
  );
}

export default App;
