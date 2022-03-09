import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {MemoryRouter, Route, Routes} from "react-router-dom";
import {Login} from "./pages/login";

ReactDOM.render(
  <React.StrictMode>
    <MemoryRouter>
      <Routes>
        <Route path={"/login"} element={<Login/>}/>
        <Route path={"/"} element={<App/>}/>
      </Routes>
    </MemoryRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
