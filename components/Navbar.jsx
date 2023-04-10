'use client';

import Link from "next/link";

export default function Navbar() {
    return <nav className="mb-10 border-b-2 border-blue-200  flex items-center justify-between w-full h-fit pb-4">
        <h1 className=" text-4xl font-extrabold">Next13</h1>
        <div className=" text-3xl flex items-center justify-between gap-4 font-sm">
            <Link href='/client'>client</Link>
            <Link href='/admin'>admin</Link>
        </div>
        <button className="text-3xl inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><Link href='/auth/signup'>Signup</Link></button>
    </nav>;
}
