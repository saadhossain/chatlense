import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
const Header = async () => {
    const session = await getServerSession(authOptions);
    return (
        <div>
            {
                !session ? <div className='flex justify-end'>
                    <div className='flex gap-3 items-center'>
                        <Button className='bg-transparent'><Link href='/login'>Login</Link></Button>
                        <Button className='bg-transparent'><Link href='/signup'>Sign up</Link></Button>
                    </div>
                </div> : <div className='flex items-center justify-between'>
                    <h3>ChatLense</h3>
                    <Image src={session.user?.image} alt={session.user?.name} width={30} height={30} className='rounded-full' />
                </div>
            }
        </div>
    )
}

export default Header