import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {MemoryRouter, Route, Routes} from "react-router-dom";
import {Login} from "./pages/login";
import {About} from './pages/about.';
import {Register} from "./pages/register";

ReactDOM.render(
  <React.StrictMode>
    <MemoryRouter>
      <Routes>
        <Route path={"/register"} element={<Register/>}/>
        <Route path={"/login"} element={<Login/>}/>
        <Route path={"/about"} element={<About/>}/>
        <Route path={"/"} element={<App/>}/>
      </Routes>
    </MemoryRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
