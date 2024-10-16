import { FaGoogle } from "react-icons/fa";

const page = () => {
    return (
        <div className='flex items-center justify-center'>
            <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-accent text-gray-100">
                <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
                <div className="my-6 space-y-2">
                    <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-2 bg-secondary font-semibold rounded-md focus:outline-noe">
                        <FaGoogle />
                        <p>Login with Google</p>
                    </button>
                </div>
                <div className="flex items-center w-full my-2">
                    <hr className="w-full text-gray-400" />
                    <p className="px-3 text-gray-400">OR</p>
                    <hr className="w-full text-gray-400" />
                </div>
                <form className="space-y-4">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 rounded-md bg-primary text-white focus:outline-none" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label htmlFor="password" className="text-sm">Password</label>
                            </div>
                            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 rounded-md bg-primary text-white focus:outline-none" />
                        </div>
                    </div>
                    <button type="button" className="w-full px-8 py-3 font-semibold rounded-md bg-secondary text-white">Sign in</button>
                </form>
                <p className="text-sm text-center text-gray-400">Dont have account?
                    <a href="#" rel="noopener noreferrer" className="focus:underline hover:underline">Sign up here</a>
                </p>
            </div>
        </div>
    );
};

export default page;