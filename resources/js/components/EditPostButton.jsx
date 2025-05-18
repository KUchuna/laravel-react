import { useState } from "react"
import EditPostModal from "./EditPostModal"
import { createPortal } from "react-dom"

export default function EditPostButton({post}) {

    const [isOpen, setIsOpen] = useState(false) 

    return (
        <>
            <button 
                className="ml-auto bg-sky-500 hover:bg-sky-600 px-2 py-1 rounded-lg cursor-pointer text-white font-bold"
                onClick={() => setIsOpen(true)}
            >
                    Update post
            </button>
            {isOpen &&
                createPortal(
                    <EditPostModal 
                        setIsOpen={setIsOpen}
                        post={post}
                    />, document.getElementById('app')
                )
            }
        </>
    )
}