import { Link } from '@inertiajs/react'

export default function Layout({ children }) {
  return (
    <>
      <header className='flex justify-center gap-4 bg-gray-900 py-4 fixed w-full z-100'>
        <Link href="/" className='px-2 py-1 bg-white rounded-lg hover:scale-110 transition-transform duration-75'>Home</Link>
        <Link href="/posts" className='px-2 py-1 bg-white rounded-lg hover:scale-110 transition-transform duration-75'>Posts</Link>
        <Link href="/about" className='px-2 py-1 bg-white rounded-lg hover:scale-110 transition-transform duration-75'>About</Link>
      </header>
      <main className='px-[80px] py-30 w-full'>{children}</main>
    </>
  )
}