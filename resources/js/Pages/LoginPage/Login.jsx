import { useForm } from "@inertiajs/react"


export default function Register() {

    const {post, errors, processing, data, setData } = useForm({
        email: "",
        password: "",
    })


    function submit(e) {
        e.preventDefault()
        post('/login')
    }


    return (
        <div className="w-full flex flex-col items-center gap-4 justify-center">
            <h1 className="text-center text-4xl font-bold uppercase text-sky-500">Login existing user</h1>
            <form className="bg-sky-100 px-8 py-8 gap-4 rounded-lg flex flex-col" onSubmit={submit}>
                <div className="flex flex-col gap-1">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" className={`bg-white outline-none rounded-lg px-2 py-1 w-[400px] ${errors.email && 'border border-red-500'}`}
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                    />
                    {errors.email && <span className="text-sm text-red-500 italic">{errors.email}</span>}
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" className={`bg-white outline-none rounded-lg px-2 py-1 w-[400px] ${errors.password && 'border border-red-500'}`}
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                    />
                    {errors.password && <span className="text-sm text-red-500 italic">{errors.password}</span>}
                </div>
                <button className={`bg-green-500 text-white font-bold rounded-lg ml-auto px-2 py-1 ${processing ? "cursor-not-allowed bg-green-800" : "cursor-pointer hover:bg-green-600"}`}
                        disabled={processing}
                        >
                        {processing ? "Loading..." : "Log in"}
                </button>
            </form>
        </div>
    )
}