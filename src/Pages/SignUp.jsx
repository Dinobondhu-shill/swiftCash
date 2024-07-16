import { useState } from "react";


const SignUp = () => {
const [error, setError] = useState(null)
const handleUserRegister = (e) =>{
e.preventDefault()
const form = e.target
const name = form.name.value
const email = form.email.value
const phone = form.phone.value
const pin = form.pin.value
const data = {name, email, pin, phone}
console.log(data)
}


return (
<div className="px-16 py-5">
  <h2 className="font-mont font-bold text-3xl">Swift<span className="text-[#369D8B]">Cash</span></h2>
  <div className="mt-10 text-center text-3xl font-semibold font-mont">
    <h3>Join the SwiftCash Family and Get Special <span className="text-[#369D8B]">Surprise</span> from us !!</h3>
  </div>
  <form className="w-full" onSubmit={handleUserRegister}>
    <div className=" mx-auto px-24 py-4 w-fit space-y-3 mt-5">
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
          min="10000" max="99999" onInput={(e)=> {
        if (e.target.value.length > 5) {
        setError("Pin Must be only 5 Digits")
        e.target.value = e.target.value.slice(0, 5);
        }
        }}
        />
        <p className="text-red-600">{error}</p>
      </div>
      <input type="submit" value="Register" className="px-4 py-2 border bg-[#369D8B] rounded-lg" />
    </div>
  </form>
</div>
);
};

export default SignUp;