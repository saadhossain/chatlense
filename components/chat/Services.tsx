import { AiOutlineCode } from "react-icons/ai";
import { FaRegFileLines } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";
import { RiGraduationCapLine, RiImageEditFill } from "react-icons/ri";
const Services = () => {
    return (
        <div className='flex items-center gap-5'>
            {/* Create Image */}
            <button className='text-sm flex items-center gap-2 p-2 rounded-3xl hover:bg-accent duration-300 ease-in-out'>
                <RiImageEditFill className='w-5 h-5 text-green-400' />
                Create Image
            </button>
            {/* Analyze Images */}
            <button className='text-sm flex items-center gap-2 p-2 rounded-3xl hover:bg-accent duration-300 ease-in-out'>
                <IoMdEye className='w-5 h-5 text-blue-400' />
                Analyze Images
            </button>
            {/* Summerize Text */}
            <button className='text-sm flex items-center gap-2 p-2 rounded-3xl hover:bg-accent duration-300 ease-in-out'>
                <FaRegFileLines className='w-5 h-5 text-orange-400' />
                Summerize Text
            </button>
            {/* Code */}
            <button className='text-sm flex items-center gap-2 p-2 rounded-3xl hover:bg-accent duration-300 ease-in-out'>
                <AiOutlineCode className='w-5 h-5 text-blue-400' />
                Code
            </button>
            {/* Get Advice */}
            <button className='text-sm flex items-center gap-2 p-2 rounded-3xl hover:bg-accent duration-300 ease-in-out'>
                <RiGraduationCapLine className='w-5 h-5 text-teal-400' />
                Get Advice
            </button>
        </div>
    )
}

export default Services