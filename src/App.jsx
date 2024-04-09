import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import router from './router'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
    <RouterProvider router={router}/>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div>New Text123</div>
        <h1>Add Extra Text</h1>
        <div>
          Replace Update with div
          extra text
        </div>
        <h3>
          Try conf
          bbbbbb
        </h3>
        <div></div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
