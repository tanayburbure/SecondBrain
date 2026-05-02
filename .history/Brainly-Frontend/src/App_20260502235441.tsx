import { Button } from "./components/Ui/Button"
import { PlusIcon } from "./icons/PlusIcon"

function App() {

  return (
    <>
      <Button size="lg" title="Large"><PlusIcon size="lg"/></Button>
      <Button size="md" title="medium"></Button>
      <Button size="sm" title="small"></Button>
    </>
  )
}

export default App
