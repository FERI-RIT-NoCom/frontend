import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Link} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App h-96">
      <header className="App-header">
        <Link to={"/login"}>Login</Link>
        <Link to={"/comments"}>Comments</Link>
        <img src={logo} className="App-logo" alt="logo" />
        <p className={"text-3xl font-bold underline tracking-widest border p-4"}>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
