import { Link } from "react-router-dom";


const MainPage = () => {
  return (
    <div>
      <nav className="px-20 py-6 flex justify-between items-center">
        <h2 className="font-mont font-bold text-3xl">Swift<span className="text-[#369D8B]">Cash</span></h2>
        <div className="space-x-5">
        <Link className="px-5 py-2 border border-[#369D8B] font-semibold  rounded-3xl hover:bg-[#369D8B]">Sign In</Link>
          <Link className="px-5 py-2 bg-[#369D8B] text-white font-semibold  rounded-3xl">Sign Up</Link>
          
        </div>
      </nav>
    </div>
  );
};

export default MainPage;