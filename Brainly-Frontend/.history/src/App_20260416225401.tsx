import { Button } from "./components/Ui/Button"

function App() {

  return (
    <>
    <Button size="md" variant="primary" text="share" onClick={function (): void {
        throw new Error("Function not implemented.")
      } }/>
    <Button></Button>
    </>
  )
}

export default App
