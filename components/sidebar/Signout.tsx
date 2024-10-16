'use client'
import { signOut } from 'next-auth/react'
import { Button } from '../ui/button'

const Signout = () => {
    return (
        <Button onClick={() => signOut()}>Signout</Button>
    )
}

export default Signout