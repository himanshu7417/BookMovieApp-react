import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './screens/Home/Home'
import Details from './screens/details/Details'
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Header from './common/Header/Header';
import BookShow from "../src/screens/bookShow/BookShow";
import Confirmation from "../src/screens/confirmation/Confirmation";
ReactDOM.render(
  <React.StrictMode> 
    <BrowserRouter>
    <Header   btnType="bookshowbtn" buttonName="BOOK SHOW"/>
      <Routes>
        <Route path='/'   element={<Home  />} />
        <Route path='details'  element={<Details />} />
        <Route
          path="/bookshow/:id"
          element={<BookShow />}
          
        />
        <Route
          path="/confirm/:id"
          element={<Confirmation />}
        
        />
      </Routes>
    </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
