import { Button } from "./components/Button"
import { PlusIcon } from "./icons/PlusIcon"

function App() {

  return (
    <>
      <Button varient="primary" startIcon={<PlusIcon/>}  text="Add Content"></Button>
      <Button varient="secondary"  text="Share"></Button>
    </>
  )
}

export default App
 