import ChatInput from './ChatInput'
import Services from './Services'

const Home = () => {
    return (
        <div className='w-9/12 mx-auto flex items-center justify-center h-screen'>
            <div className='w-full flex flex-col items-center justify-center gap-5'>
                <h3 className='text-4xl font-semibold'>What can I help with?</h3>
                <ChatInput />
                <Services />
            </div>
        </div>
    )
}

export default Home