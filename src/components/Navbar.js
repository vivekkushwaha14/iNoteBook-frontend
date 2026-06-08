import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useLocation } from 'react-router'

const Navbar = () => {
  let location = useLocation()
  const navigate = useNavigate();

  const navLinkClass = (path) =>
    `rounded-md px-3 py-2 text-xl font-bold transition ${location.pathname === path
      ? "bg-blue-50 text-blue-700"
      : "text-white hover:bg-slate-100 hover:text-slate-900"
    }`;

  return (
  <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-blue-500 shadow-sm backdrop-blur ">
  <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between px-4 py-3 sm:px-6">

    <div className="flex items-center gap-3 sm:gap-6">
      <Link to="/" className="flex items-center gap-2 sm:gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white shadow-sm">
          iN
        </span>
        <span className="text-lg sm:text-xl font-bold text-black">
          iNotebook
        </span>
      </Link>

      <ul className="flex list-none items-center gap-1 p-0 text-sm sm:text-lg">
        <li>
          <Link to="/" className={navLinkClass("/")}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={navLinkClass("/about")}>
            About
          </Link>
        </li>
      </ul>
    </div>

  {localStorage.getItem("token") ? (
  <button
    className="rounded-lg bg-slate-700 px-3 py-2 text-sm font-semibold text-white shadow-sm transition cursor-pointer hover:bg-slate-700"
    onClick={() => {
      localStorage.removeItem("token");
      navigate("/login");
    }}
  >
    Log out
  </button>
) : (
  <div className="flex items-center gap-2">
    {location.pathname === "/login" && (
      <Link
        to="/signup"
        className="rounded-lg bg-blue-800 px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
      >
        Sign up
      </Link>
    )}

    {location.pathname === "/signup" && (
      <Link
        to="/login"
        className="rounded-lg bg-blue-800 px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 "
      >
        Log in
      </Link>
    )}

    {location.pathname !== "/login" &&
      location.pathname !== "/signup" && (
        <>
          <Link
            to="/login"
            className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Log in
          </Link>

          <Link
            to="/signup"
            className="rounded-lg bg-blue-800 px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            Sign up
          </Link>
        </>
      )}
  </div>
)}
    
  </div>
</nav>
  )
}

export default Navbar
