import { Button } from "./components/Ui/Button"
import { PlusIcon } from "./icons/PlusIcon"
import { ShareIcon } from "./icons/ShareIcon"

function App() {

  return (
    <>
      <Button startIcon={<PlusIcon size="lg"/>} endIcon={<ShareIcon size="md"/>} size="lg" title="Large"></Button>
      <Button size="md" title="medium"></Button>
      <Button size="sm" title="small"></Button>
    </>
  )
}

export default App
