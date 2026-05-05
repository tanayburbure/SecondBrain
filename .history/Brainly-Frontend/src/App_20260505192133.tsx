import { Button } from "./components/Button"
import { Card } from "./components/Card"
import { PlusIcon } from "./icons/PlusIcon"
import { ShareIcon } from "./icons/ShareIcon"

function App() {

  return (
    <>
      <Button varient="primary" startIcon={<PlusIcon/>}  text="Add Content"></Button>
      <Button varient="secondary" startIcon={<ShareIcon/>}  text="Share Brain"></Button>
      <Card/>
    </>
  )
}

export default App
 