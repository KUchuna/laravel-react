import { useState, useEffect, useRef } from "react"
import { createPortal } from "react-dom";
import { useQuery } from '@tanstack/react-query'

export default function ChatButton() {

    const [isOpen, setIsOpen] = useState(false);
    const chatRef = useRef(null)    

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (chatRef.current && !chatRef.current.contains(e.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        }
    })
    
    async function fetchUsers() {
        const response = await fetch('/users');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }

    const { isPending, data, error } = useQuery({
        queryKey: ['users'],
        queryFn: fetchUsers,
    })

    return (
        <>
            <div className="bg-sky-600 select-none uppercase text-white font-bold hover:bg-sky-400 rounded-full px-2 py-2 w-[50px] h-[50px] fixed bottom-10 right-10 flex justify-center items-center cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
                id="chat-button"
            >
                chat
            </div>
            {isOpen && (
                isPending ? (
                    <div>Loading users...</div>
                ) : error ? (
                    <div>Error loading: {error.message}</div>
                ) : (
                    createPortal(
                    <div className="w-[400px] h-[300px] bg-red-400 fixed right-10 bottom-24 rounded-lg px-2 py-1" ref={chatRef}>
                        <ul>
                        {data?.users?.map((user) => (
                            <li key={user.id}>{user.name}</li>
                        ))}
                        </ul>
                    </div>,
                    document.getElementById('app')
                    )
                )
            )}
        </>
    )
}