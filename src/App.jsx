import { CheckCircle } from "react-feather"
import Modal from "./components/Modal"
import { useState } from "react"

function App() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <main className="App">
        <button className="btn btn-success" onClick={() => setOpen(true)}>
          <CheckCircle size={30} /> Continue
        </button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <div className="text-center w-56">

            <CheckCircle size={56} className="mx-auto text-green-500" />
            <div className="mx-auto my-4 w-48">
              <h3 className="text-lg font-black text-gray-800">Confirm to Continue</h3>
              <p className="text-sm text-gray-500">Are you sure to Continue</p>
            </div>
            <div className="flex gap-4">
              <button className="btn btn-success w-full">Continue</button>
              <button onClick={() => setOpen(false)} className="btn btn-light w-full">Cancel</button>

            </div>
          </div>
        </Modal>
      </main>
    </>
  )
}

export default App
