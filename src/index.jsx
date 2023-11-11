import React from 'react'
// import React, { useRef } from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Header from './components/Error/Header'
import Error from './components/Error/Error'
import Freelances from './pages/Freelances'
import Results from './pages/Results'
import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
    div {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
`
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle/>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Freelances" element={<Freelances />} />
        <Route path="/Results" element={<Results />} />
        <Route path="/survey/:questionNumber" element={<Survey />} />
        <Route path="*" element={<Error />} />
        </Routes>
        
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)



