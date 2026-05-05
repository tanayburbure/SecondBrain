import { Button } from "./components/Button"
import { PlusIcon } from "./icons/PlusIcon"
import { ShareIcon } from "./icons/ShareIcon"

function App() {

  return (
    <>
      <Button varient="primary" startIcon={<PlusIcon/>}  text="Add Content"></Button>
      <Button varient="secondary" startIcon={<ShareIcon/>}  text="Share"></Button>
    </>
  )
}

export default App
 