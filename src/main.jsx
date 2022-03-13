import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {MemoryRouter, Route, Routes} from "react-router-dom";
import {Login} from "./pages/login";
import {Register} from "./pages/register";
import { Comments } from "./pages/comments";

ReactDOM.render(
  <React.StrictMode>
    <MemoryRouter>
      <Routes>
        <Route path={"/register"} element={<Register/>}/>
        <Route path={"/login"} element={<Login/>}/>
        <Route path={"/comments"} element={<Comments/>}/>
        <Route path={"/addComment"} element={<Login/>}/>
        <Route path={"/"} element={<App/>}/>
      </Routes>
    </MemoryRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
