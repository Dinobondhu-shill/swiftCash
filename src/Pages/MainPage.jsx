import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import mfs from '../../public/mfs.json'
import { FaGooglePlay , FaApple  } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";


const MainPage = () => {
const {user } = useContext(AuthContext)
console.log(user)

  return (
    <div className="w-full h-screen">
      <nav className="px-16 py-6 flex justify-between items-center">
        <h2 className="font-mont font-bold text-3xl">Swift<span className="text-[#369D8B]">Cash</span></h2>
        <div className="space-x-5">
        <Link to={'/login'} className="px-5 py-2 border border-[#369D8B] font-semibold  rounded-3xl hover:bg-[#369D8B]">Sign In</Link>
          <Link to={'/sign-up'} className="px-5 py-2 bg-[#369D8B] text-white font-semibold  rounded-3xl">Sign Up</Link>
          
        </div>
      </nav>
      <div className="w-full flex items-center">
        <h1 className="text-8xl w-3/5 px-16 font-bold">Fast, secure, <br/> and <span className="text-[#369D8B]">effortless </span> payment.</h1>
        <div className="w-2/5">
        <Lottie animationData={mfs} loop={true}></Lottie>
        </div>
      </div>
    <div className="flex justify-between">
    <p className="max-w-4xl px-16 "> With our user-friendly platform, you can send and receive money instantly, manage your finances effortlessly, and connect globally—all while enjoying the lowest fees in the market. Join millions of users and experience the future of financial freedom with SwiftCash.
    </p>
    <div className="flex gap-4">
      <div className="flex gap-2 p-2 bg-black text-white rounded-md items-center w-fit">
      <FaGooglePlay className="text-3xl" />
      <h3>Download on <br/> <span className="text-xl font-bold">Google Play</span></h3>
      </div>
      <div className="flex gap-2 p-2 bg-black text-white rounded-md items-center w-fit">
      <FaApple className="text-3xl" />
      <h3 className="text-md">Download on <br/> <span className="text-xl font-bold">App Store</span></h3>
      </div>
      

    </div>
    <div>

    </div>
    </div>
    </div>
  );
};

export default MainPage;