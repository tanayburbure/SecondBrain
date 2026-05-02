import { Button } from "./components/Ui/Button"
import { PlusIcon } from "./icons/PlusIcon"

function App() {

  return (
    <>
      <Button startIcon={<PlusIcon size="lg"/>} size="lg" title="Large"></Button>
      <Button size="md" title="medium"></Button>
      <Button size="sm" title="small"></Button>
    </>
  )
}

export default App
