import { useForm } from "@inertiajs/react"
import EditPostButton from "../../components/EditPostButton";

export default function Post({post}) {
    
    const { delete: destroy } = useForm()
    
    function submit(e) {
        e.preventDefault();
        destroy(`/posts/${post.id}`);  
    }

    return (
        <>
            <div className="border-b border-gray-400 pb-4 mt-2">
                <span className="text-gray-400 text-sm">
                    {new Date(post.created_at).toLocaleTimeString()}
                </span>
                <p>{post.body}</p>

            </div>
            <div className="mt-2 w-full flex flex-row-reverse gap-4">
                <form onSubmit={submit}>
                    <button className="bg-red-500 hover:bg-red-600 text-white font-bold px-2 py-1 rounded-lg cursor-pointer">
                        Delete
                    </button>
                </form>
                <EditPostButton 
                    post={post}
                />
            </div>
        </>
    )
}