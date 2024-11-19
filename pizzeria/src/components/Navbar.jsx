import { formatCurr } from "../utils/formatCurr";
import { CiPizza } from "react-icons/ci";
import { GiPadlock } from "react-icons/gi";
import { GiPadlockOpen } from "react-icons/gi";

function Navbar() {
  const total = 25000;
  const token = true;
  return (
    <nav className="bg-gray-700  dark:bg-zinc-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Pizzeria Mamma Mia!
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            id="btn"
            className=" border-x-blue-700 bg-gray-800 text-white  hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-blue-800"
          >
            <i className="fa-solid fa-cart-shopping"> </i> Total: ${" "}
            {formatCurr(total)}
          </button>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            ></svg>
          </button>
        </div>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <div className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md-bg-zinc-900  md:dark:bg-gray-900 ">
            <button
              id="home"
              className="flex flex-row py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
              aria-current="page"
            >
              <CiPizza /> Home
            </button>

            {token ? (
              <div className="flex flex-row gap-5">
                <button
                  id="login"
                  className="flex py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <GiPadlockOpen />
                  Login
                </button>

                <button
                  id="register"
                  className="flex flex-row py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <GiPadlock />
                  Register
                </button>
              </div>
            ) : (
              <div className="flex flex-row gap-3">
                <button
                  id="profile"
                  className="flex py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:dark:hover:text-white dark:text-white dark:hover:bg-transparent dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Profile
                </button>

                <button
                  id="logout"
                  className="flex py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
