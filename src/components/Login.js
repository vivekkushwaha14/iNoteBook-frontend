import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import API_BASE_URL from '../config/api';

import toast from "react-hot-toast";
const Login = (props) => {
    const [credentials, setcredentials] = useState({ email: "", password: "" })
    const [loading, setLoading] = useState(false);
    const [error, seterror] = useState("");
    let navigate = useNavigate();
    const handlesubmit = async (e) => {
        e.preventDefault()
        setLoading(true);
        try {
            const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: credentials.email, password: credentials.password })
            });
            const json = await response.json()

            if (json.success) {
                //save the auth token and redirect
                localStorage.setItem("token", json.authtoken)


                toast.success("Login successful");
                navigate("/");
            }
            else {
                seterror(json.error || json.message || "Login failed");
                toast.error(json.error || json.message ||"Login failed");
            }


        } catch (error) {
            console.error("Login error:", error);
           toast.error("An error occurred during login. Please try again.");
        } finally {
            setLoading(false);
        }
    };


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
                        Welcome back
                    </h1>
                    <p className="mt-2 text-sm text-slate-500">
                        Log in to continue managing your notes.
                    </p>
                </div>

                <form className="grid gap-5" onSubmit={handlesubmit}>
                    <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={credentials.email}
                            onChange={onchange}
                            className="block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                            placeholder="you@example.com"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="mb-2 block text-sm font-semibold text-slate-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={credentials.password}
                            onChange={onchange}
                            className="block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    {error && <p className="text-sm text-red-500">{error}</p>}

                    <button type="submit" disabled={loading} className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700">
                        {loading ? "Logging in..." : "Log in"}
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-slate-500">
                    Don't have an account?
                    <Link to="/signup" className="ml-1 font-semibold text-blue-700 hover:text-blue-800">Sign up</Link>
                </p>
            </div>
        </main>



    )
}


export default Login
