import { Link } from "@inertiajs/react";
import NewPostButton from "../../components/NewPostButton";
import Pagination from "../../components/Pagination";

export default function Posts({posts, user}) {

    return (
        <>  
            <div className="flex mb-4 justify-between items-center">
                <h1 className="text-4xl text-sky-400 font-bold">Welcome, {user.name}</h1>
                <NewPostButton />
            </div>
            <Pagination 
                posts={posts}
            />
            <div className="flex flex-col gap-2 mt-2">
                {posts.data.map((post) => {
                    return (
                        <div key={post.id} className="border-b border-gray-400 pb-4 mt-2">
                            <span className="text-gray-400 text-sm">
                                {new Date(post.created_at).toLocaleTimeString()}
                            </span>
                            <p>{post.body}</p>
                            <Link className="text-blue-600 font-bold hover:text-blue-700" href={`/posts/${post.id}`}>Read More...</Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}