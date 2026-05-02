import { Button } from "./components/Ui/Button"
import { PlusIcon } from "./icons/PlusIcon"

function App() {

  return (
    <>
    <Button startIcon={<PlusIcon size={"lg"}/>} size="sm" variant="primary" text="share" onClick={function (): void {
        throw new Error("Function not implemented.")
      } }/>
    <Button size="md" variant="secondary" text="Add Content" onClick={function (): void {
        throw new Error("Function not implemented.")
      } }/>
      <Button size="lg" variant="secondary" text="Show Content" onClick={function (): void {
        throw new Error("Function not implemented.")
      } }/>
    </>
  )
}

export default App
