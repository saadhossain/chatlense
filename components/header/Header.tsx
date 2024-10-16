import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
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
                        <Button className='bg-transparent'><Link href='/login'>Sign up</Link></Button>
                    </div>
                </div> : <div>
                    <h4>User Image</h4>
                </div>
            }
        </div>
    )
}

export default Header