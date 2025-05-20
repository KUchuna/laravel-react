import { Link, useForm } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';


export default function Layout({ children }) {

  const { auth } = usePage().props;

  const { post } = useForm();

  function handleLogout(e) {
    e.preventDefault()
    post('/logout')
  }
  
  return (
    <>
      <header className='flex justify-between gap-4 bg-gray-900 py-4 px-20 fixed w-full z-100'>
        <nav className='flex gap-4'>
          <Link href="/" className='px-2 py-1 bg-white rounded-lg hover:scale-110 transition-transform duration-75'>Home</Link>
          <Link href="/posts" className='px-2 py-1 bg-white rounded-lg hover:scale-110 transition-transform duration-75'>Posts</Link>
          <Link href="/about" className='px-2 py-1 bg-white rounded-lg hover:scale-110 transition-transform duration-75'>About</Link>
        </nav>
        <div className='flex gap-2'>
          {!auth.user && (
            <>
              <Link href="/login" className='px-2 py-1 bg-white rounded-lg hover:scale-110 transition-transform duration-75'>Login</Link>
              <Link href="/register" className='px-2 py-1 bg-white rounded-lg hover:scale-110 transition-transform duration-75'>Register</Link>
            </>
          )}
          {auth.user && (
            <button
              onClick={handleLogout}
              className='px-2 py-1 bg-white rounded-lg hover:scale-110 transition-transform duration-75 cursor-pointer'
            >
              Log out
            </button>
          )}
        </div>
      </header>
      <main className='px-[80px] py-30 w-full'>{children}</main>
    </>
  )
}