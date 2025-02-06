import React, { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <h1>React + Electron App</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          Contador: {count}
        </button>
        <p>
          Edite <code>src/App.jsx</code> e salve para testar o HMR
        </p>
      </div>
    </div>
  )
}

export default App
