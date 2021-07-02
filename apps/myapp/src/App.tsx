import React, { useState } from 'react'

import { MyComp } from '@moreptsviteex/package-a'

import './App.css'

export function App(): JSX.Element {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello</p>
        <MyComp example={`Welt ${count}`} />
        <p>
          <button
            onClick={() => {
              setCount((count) => count + 1)
            }}>
            Klick mich
          </button>
        </p>
      </header>
    </div>
  )
}
