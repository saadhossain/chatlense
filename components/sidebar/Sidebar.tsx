import { getServerSession } from 'next-auth';
import { authOptions } from '../../app/api/auth/[...nextauth]/route';
import LoginModal from './LoginModal';
import Signout from './Signout';

const Sidebar = async () => {
    const session = await getServerSession(authOptions);
    console.log(session)
    return (
        <div className={`w-1/5 p-5 ${session ? 'bg-[#111313]' : 'bg-transparent'}`}>
            {
                !session ? <div>
                    <LoginModal />
                </div> : <div>
                    <Signout />
                </div>
            }
        </div>
    )
}

export default Sidebar