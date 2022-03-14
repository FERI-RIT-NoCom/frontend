import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {MemoryRouter, Route, Routes} from "react-router-dom";
import {Login} from "./pages/login";
import {Register} from "./pages/register";
import Main_page from "./pages/main_page";

ReactDOM.render(
  <React.StrictMode>
    <MemoryRouter>
      <Routes>
        <Route path={"/register"} element={<Register/>}/>
        <Route path={"/login"} element={<Login/>}/>
        <Route path={"/"} element={<App/>}/>
        <Route path={"/main"} element={<Main_page/>}/>
      </Routes>
    </MemoryRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
