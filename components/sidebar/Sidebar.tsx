import Logo from '@/app/assests/logo.svg';
import { getServerSession } from 'next-auth';
import Image from 'next/image';
import Link from 'next/link';
import { authOptions } from '../../app/api/auth/[...nextauth]/route';
import LoginModal from './LoginModal';
import Signout from './Signout';

const Sidebar = async () => {
    const session = await getServerSession(authOptions);
    console.log(session)
    return (
        <div className={`w-1/5 p-5 ${session ? 'bg-[#111313]' : 'bg-transparent'}`}>
            <div className='flex gap-4 items-center'>
                <Link href='/'><Image src={Logo} alt='Logo' width={30} height={30} /></Link>
                {
                    !session ?
                        <LoginModal /> : <div>
                            <Signout />
                        </div>
                }
            </div>
        </div>
    )
}

export default Sidebar