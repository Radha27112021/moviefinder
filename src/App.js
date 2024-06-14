import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SingleMovie from './components/SingleMovie';
import Error from './components/Error';
import Blogs from './components/Blogs';
import './App.css';

const App = () => {
  return (
    <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie/:id' element={<SingleMovie />} />
          <Route path='*' element={<Error />} />
          <Route path='/blogs' element={<Blogs/>}/>
        </Routes>
    </div>
  );
}

export default App;
