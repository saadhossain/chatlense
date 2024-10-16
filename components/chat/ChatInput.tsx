import { FaArrowUp } from "react-icons/fa";
const ChatInput = () => {
    return (
        <form className='w-full flex items-center relative'>
            <input type="text" name="prompt" className='w-full h-12 rounded-3xl focus:outline-none bg-accent px-5' placeholder='Message ChatLense' />
            <button type='submit' className='absolute right-2 bg-[#4c4c4c] p-2 rounded-full'><FaArrowUp /></button>
        </form>
    )
}

export default ChatInput