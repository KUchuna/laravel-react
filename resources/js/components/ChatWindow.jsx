import { useState } from "react";

export default function ChatWindow({data}) {

    const [isOpen, setIsOpen] = useState(false);

    function handleShowForm(id) {
        setIsOpen(true)
    }

    return (
        <>
            <ul className="flex flex-col gap-2 w-[30%] bg-teal-300 px-2 py-3 rounded-lg overflow-y-scroll" id="chat-list">
                {data?.users?.map((user) => (
                    <li key={user.id} 
                        className="bg-teal-100 hover:bg-teal-50 transition-colors duration-100 px-2 py-2 text-sm cursor-pointer rounded-lg font-bold text-teal-800"
                        onClick={() => handleShowForm(user.id)}
                    >
                            {user.name}
                    </li>
                ))}
            </ul>
        </>
    )
}