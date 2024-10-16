import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import Link from 'next/link';
import { IoIosArrowDown } from "react-icons/io";
import { Button } from '../ui/button';

const LoginModal = () => {
    return (
        <Dialog>
            <DialogTrigger className='flex items-center gap-2 justify-center'>
                ChatLense beta
                <IoIosArrowDown />
            </DialogTrigger>
            <DialogContent className='w-1/4 bg-accent top-28 left-48 border-none rounded-md'>
                <DialogHeader>
                    <DialogTitle>Unlock advanced features</DialogTitle>
                    <DialogDescription>
                        Get smarter responses, save chats, and more by logging in.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className='flex gap-3 items-center'>
                    <Button><Link href='/login'>Login</Link></Button>
                    <Button className='bg-transparent'><Link href='/signup'>Sign up</Link></Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default LoginModal