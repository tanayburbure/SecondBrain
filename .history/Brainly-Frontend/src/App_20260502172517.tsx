import { Button } from "./components/Ui/Button"
import React from "react"

function App() {
  const Btn = Button as unknown as React.ComponentType<any>

  return (
    <>
      <Btn size="sm" title="Share" />
    </>
  )
}

export default App
