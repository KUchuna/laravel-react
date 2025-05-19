import { useState } from "react"
import { createPortal } from "react-dom"
import NewPostModal from "./NewPostModal.jsx"

export default function NewPostButton() {

    const [isOpen, setIsOpen] = useState(false) 

    return (
        <>
            <button className="bg-green-500 px-2 py-3 rounded-xl cursor-pointer hover:bg-green-600 text-white font-bold" 
                    onClick={() => setIsOpen(true)}>
                Create new post +
            </button>
            {isOpen &&
                createPortal(
                    <NewPostModal 
                        setIsOpen={setIsOpen}
                    />, document.getElementById('app')
                )
            }
        </>
    )
}