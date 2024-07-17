import { useContext, useState } from 'react';
import { Link, } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Login = () => {
  const [loginErr, setLoginErr] = useState('');
 const {login} = useContext(AuthContext)

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;

    const identifier = form.identifier.value;
    const pin = form.pin.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{11}$/;

    if (!emailRegex.test(identifier) && !phoneRegex.test(identifier)) {
      setLoginErr('Please enter a valid email or 11-digit mobile number');
      return;
    }

    const data = { identifier, pin };
    login(identifier, pin)
  };

  return (
    <div className='px-16 py-8'>
      <h2 className="font-mont font-bold text-3xl">Swift<span className="text-[#369D8B]">Cash</span></h2>
      <div className='bg-transparent md:absolute top-0 left-0 md:mx-20 lg:mx-52 mt-10 px-10 py-6 rounded-sm text-center'>
        <h2 className='font-dancing text-5xl py-3'>Welcome back to <span className='font-mont text-7xl'>SwiftCash</span></h2> <hr />
        <div className='my-10 flex flex-wrap md:flex-nowrap md:justify-between w-full'>
          <div className='lg:border-l lg:ml-20 flex flex-col w-full md:w-1/2 lg:pl-16'>
            <form onSubmit={handleLogin}>
              <div className="flex flex-col text-start">
                <label className="font-semibold">Enter your Email or Mobile Number</label>
                <input 
                  type="text" 
                  placeholder="Enter your Email or Mobile Number" 
                  name="identifier"
                  className="input input-bordered w-full max-w-xl" 
                  required 
                />
                <div className="mt-2">
                  <label className="font-semibold font-mont">Enter Your PIN</label>
                  <input 
                    type="number" 
                    placeholder="Enter Your PIN" 
                    name="pin" 
                    className="input input-bordered w-full max-w-xl"
                    min="10000" 
                    max="99999" 
                    onInput={(e) => {
                      if (e.target.value.length > 5) {
                        setLoginErr("PIN must be exactly 5 digits");
                        e.target.value = e.target.value.slice(0, 5);
                      }
                    }} 
                    required 
                  />
                </div>
              </div>
              <input type="submit" value="Log in" className="px-4 mt-4 py-2 border bg-[#369D8B] rounded-lg" />
            </form>
            {loginErr && <span className="text-bold text-red-600 mt-5">{loginErr}</span>}
            <p data-aos="fade-left" className="mt-4 text-[16px] pb-4">
              Don't have an account? <Link to={'/sign-up'} className="underline text-[#51cebf]">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
