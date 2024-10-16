'use client'
import { signOut } from 'next-auth/react'

const Signout = () => {
    return (
        <p onClick={() => signOut()}>Signout</p>
    )
}

export default Signout