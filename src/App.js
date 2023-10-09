

import { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

export default class App extends Component{
  render(){
    return(
      <>
       <Router>
        <div>
      <Navbar/>
     
        <Routes>
          <Route path ='/' element ={ <News pageSize ={15} country ="in" category ="sports"/>}></Route>
      </Routes>
      <Routes>
        <Route path ='/home' element ={ <News pageSize ={15} country ="in" category ="sports"/>}></Route>
      </Routes>
      <Routes>
          <Route path ='/sports' element ={ <News pageSize ={15} country ="in" category ="sports"/>}></Route>
      </Routes>
      <Routes>
          <Route path ='/entertainment' element ={ <News pageSize ={15} country ="in" category ="entertainment"/>}></Route>
      </Routes>
      <Routes>
          <Route path ='/economy' element ={ <News pageSize ={15} country ="in" category ="business"/>}></Route>
      </Routes>
      <Routes>
          <Route path ='/health' element ={ <News pageSize ={15} country ="in" category ="health"/>}></Route>
      </Routes>
      <Routes>
          <Route path ='/social' element ={ <News pageSize ={15} country ="in" category ="general"/>}></Route>
      </Routes>
      <Routes>
          <Route path ='/science' element ={ <News pageSize ={15} country ="in" category ="science"/>}></Route>
      </Routes>
      <Routes>
          <Route path ='/technology' element ={ <News pageSize ={15} country ="in" category ="technology"/>}></Route>
      </Routes>
      </div>
      </Router>
      </>
    )
  }
}




