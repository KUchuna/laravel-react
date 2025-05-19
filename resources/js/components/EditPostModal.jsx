import { useForm } from "@inertiajs/react";
import { useEffect, useRef } from "react";

export default function EditPostModal({setIsOpen, post}) {
    
    const formRef = useRef(null)
    
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (formRef.current && !formRef.current.contains(e.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        }
    })
    
    const { data, setData, put, errors, processing, wasSuccessful } = useForm({
        body: post.body,
    })

    function submit(e) {
        e.preventDefault()
        put(`/posts/${post.id}`)
    }


    wasSuccessful && setIsOpen(false)

    return (
        <div className="absolute w-full h-full flex flex-col gap-4 justify-center items-center" id="new-post-modal">
            <h4 className="font-bold text-3xl text-sky-500">Add new post</h4>
            <form className="bg-sky-100 w-[70%] h-[40%] rounded-2xl px-2 py-4 flex flex-col gap-4" ref={formRef} onSubmit={submit}>
                <label className="w-full font-bold text-lg text-green-500" htmlFor="body">Add your post text</label>
                <textarea className={`bg-white h-full resize-none rounded-lg px-3 py-2 text-xl outline-none ${errors.body && "border border-red-500"}`}  id="body" name="body" placeholder="Start typing..." value={data.body} onChange={(e) => setData('body', e.target.value)}>

                </textarea>
                {errors.body && <p className="text-red-500 italic">{errors.body}</p>}
                <button type="submit" className={`bg-green-500 ml-auto px-3 py-1 rounded-lg text-white font-bold cursor-pointer hover:bg-green-600 ${processing && "cursor-not-allowed bg-gray-400 pointer-events-none"}`} disabled={processing}>{processing ? "Loading.." : "Submit!"}</button>
            </form>
        </div>
    );
}
