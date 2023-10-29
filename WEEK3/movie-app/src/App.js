import { movies } from './movieApi';
import './App.css';
import styled from "styled-components";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from './pages/main';
import Movie from './pages/movie';
import Program from './pages/program';
import People from './pages/people';
import Header from './components/header';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/movie" element={<Movie />} />
        <Route exact path='/program' element={<Program />} />
        <Route exact path='/people' element={<People />} />
      </Routes>
    </BrowserRouter>
 
  );
}

export default App;
