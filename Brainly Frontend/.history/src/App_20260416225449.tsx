import { Button } from "./components/Ui/Button"

function App() {

  return (
    <>
    <Button size="sm" variant="primary" text="share" onClick={function (): void {
        throw new Error("Function not implemented.")
      } }/>
    <Button size="md" variant="secendary" text="share" onClick={function (): void {
        throw new Error("Function not implemented.")
      } }/>
      <Button size="lg" variant="primary" text="share" onClick={function (): void {
        throw new Error("Function not implemented.")
      } }/>
    </>
  )
}

export default App
