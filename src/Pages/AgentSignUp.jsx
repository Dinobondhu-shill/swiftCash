import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AgentSignUp = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleUserRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const pin = form.pin.value;
    const role = 'agent';
    const data = { name, email, pin, phone, role };

    try {
      await axios.post('http://localhost:5000/register', data)
        .then(result => {
          console.log(result.data);
          alert('Registration successful!');
          form.reset();
          navigate('/login');
        });
    } catch (error) {
      console.error('Error during registration', error);
    } finally {
      setLoading(false); // Set loading to false when the registration process is complete
    }
  };

  return (
    <div className="px-16 py-5">
      <h2 className="font-mont font-bold text-3xl">Swift<span className="text-[#369D8B]">Cash</span></h2>
      <div className="mt-10 text-center text-3xl font-semibold font-mont">
        <h3>Join Our SwiftCash Agent Network and Empower Financial Inclusion!</h3>
      </div>
      <form className="w-full" onSubmit={handleUserRegister}>
        <div className="mx-auto px-24 py-4 w-fit space-y-3 mt-5">
          <div className="flex flex-col">
            <label className="font-semibold font-mont ">Your Name?* </label>
            <input type="text" placeholder="Enter Your Name Here" name="name"
              className="input input-bordered w-full max-w-xl" required />
            <div className="mt-2">
              <label className="font-semibold font-mont "> Enter Your email* </label>
              <input type="email" placeholder="Type here" name="email" className="input input-bordered w-full max-w-xl"
                required />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="font-semibold font-mont"> Enter Phone Number* </label>
            <input type="tel" placeholder="Type here" name="phone" className="input input-bordered w-full max-w-xl"
              pattern="[0-9]{11}" title="Please enter a valid 11-digit phone number" required />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold font-mont">Enter PIN </label>
            <input type="number" placeholder="Type here" name="pin" className="input input-bordered w-full max-w-xl"
              min="10000" max="99999" onInput={(e) => {
                if (e.target.value.length > 5) {
                  setError("Pin Must be only 5 Digits")
                  e.target.value = e.target.value.slice(0, 5);
                }
              }}
            />
          </div>
          <p className="text-red-600">{error}</p>
          <button type="submit" className="px-4 py-2 border bg-[#369D8B] rounded-lg" disabled={loading}>
            {loading ? (
              <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8h8a8 8 0 01-16 0z"></path>
              </svg>
            ) : (
              'Register'
            )}
          </button>
          <p>Or, <Link to={"/login"} className="text-[#369D8B] underline"> Login </Link></p>
        </div>
      </form>
    </div>
  );
};

export default AgentSignUp;
