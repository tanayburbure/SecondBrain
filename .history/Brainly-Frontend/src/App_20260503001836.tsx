import { Button } from "./components/Ui/Button"
import { PlusIcon } from "./icons/PlusIcon"
import { ShareIcon } from "./icons/ShareIcon"

function App() {

  return (
    <>
      <Button varient="primary" startIcon={<PlusIcon size="lg"/>} endIcon={<ShareIcon size="sm"/>} size="lg" title="Large"></Button>
    </>
  )
}

export default App
 