import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import API_BASE_URL from '../config/api';
import toast from "react-hot-toast";
const Signup = (props) => {
  const [credentials, setcredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handlesubmit = async (e) => {
    e.preventDefault()
    setLoading(true);
    try {
      const { name, email, password, cpassword } = credentials;

      if (password !== cpassword) {
        toast.error("Passwords do not match");
        return;
      }

      const response = await fetch(`${API_BASE_URL}/api/auth/createUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password })
      });
      const json = await response.json()
      console.log(json);
      if (json.success) {

        //save the auth token and redirect
        localStorage.setItem("token", json.authtoken)
        navigate("/");
        toast.success("Account created successfully!");
      }
      else {
        toast.error("Sorry, a user with this email already exists");
      }
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("An error occurred during signup. Please try again.");
    } finally {
      setLoading(false);
    }




  }
  const onchange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  }
  return (

    <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-8 text-center">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white shadow-sm">
            iN
          </span>

          <h1 className="mt-5 text-2xl font-bold text-slate-950">
            Create your account
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Start saving your personal notes securely.
          </p>
        </div>

        <form className="grid gap-5" onSubmit={handlesubmit}>
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-700">Your Name</label>
            <input id='name' onChange={onchange} name='name'
              type="text"
              className="block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">Email</label>
            <input id='email' onChange={onchange} name='email'
              type="email"
              className="block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-semibold text-slate-700">Password</label>
            <input id='password' onChange={onchange} name='password'
              type="password"
              className="block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
              placeholder="Enter your password"
              required
              minLength={5}
            />
          </div>
          <div>
            <label htmlFor="cpassword" className="mb-2 block text-sm font-semibold text-slate-700">Confirm Password</label>
            <input id='cpassword' onChange={onchange} name='cpassword'
              type="password"
              className="block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
              placeholder="Confirm your password"
              required
              minLength={5}
            />
          </div>

          <button
            className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
            type="submit"
          >
            {loading ? "Creating account..." : "Create account"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Already have an account?
          <Link to="/login" className="ml-1 font-semibold text-blue-700 hover:text-blue-800">Log in</Link>
        </p>
      </div>
    </main>
  )
}

export default Signup
