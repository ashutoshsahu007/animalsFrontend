'use client';
import React from "react"
import Link from "next/link";

function Header() {
    return (
        <div className="text-md  p-4 w-9/12 bg-green-600  rounded-lg">
            <nav>
                <ul className="flex gap-4 text-white  justify-center">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/signup">Sign Up</Link></li>
                    <li><Link href="/signin">Sign in</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
