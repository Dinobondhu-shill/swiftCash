import { Link } from "react-router-dom";


const MainPage = () => {
  return (
    <div>
      <nav className="px-20 py-6">
        <h2 className="font-mont font-bold text-3xl">SwiftCash</h2>
        <div>
          <Link>Sign Up</Link>
          <Link>Sign In</Link>
        </div>
      </nav>
    </div>
  );
};

export default MainPage;