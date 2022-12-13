import Link from "next/link";
import profile_image from "/public/ece.png";
import Image from "next/image";
import Header from "./Header";
import { FaUserCircle, FaUserCog } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className=" bg-[#007178]   border-blue-400  dark:border-gray-600 dark:bg-gray-700 grid grid-flow-row  ">
      <div className="  flex flex-row text-center items-center justify-between ">
        <div>
          <a
            href="https://www.ece.fr/"
            target="_blank"
            rel="noopener noreferrer"
            title="Site de l'école d'ingénieurs ECE"
          >
            <Image
              src={profile_image}
              alt="Picture of the author"
              width={190}
              height={100}
              className="bg-white dark:bg-gray-700"
            />
          </a>
        </div>
        <div>
          <ul className="flex flex-col text-center justify-between  border-blue-400 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:dark md:dark:bg-transparent  ">
            <li className="hover:text-white hover:underline hover:scale-110  text-2xl ">
              <Link
                href="/"
                className="  md:bg-transparent md:text-white md:p-0 md:dark:text-white dark:bg-white md:dark:bg-transparent"
              >
                Home
              </Link>
            </li>
            <li className="hover:text-white  hover:underline hover:scale-110  text-2xl">
              <Link
                href="/about"
                className=" text-white bg-white  md:bg-transparent md:text-white md:p-0 "
              >
                About
              </Link>
            </li>
            <li className="hover:text-white hover:underline hover:scale-110  text-2xl">
              <Link
                href="/contacts"
                className=" text-white bg-white  md:bg-transparent md:text-white md:p-0 "
              >
                Contact
              </Link>
            </li>
            <li className="hover:text-white hover:underline hover:scale-110  text-2xl">
              <Link
                href="/articles"
                className=" text-white bg-white md:bg-transparent md:text-white md:p-0 "
              >
                Articles
              </Link>
            </li>

            <li className="hover:text-white hover:underline hover:scale-110 text-2xl">
              <Link
                href="/insertsupa"
                className=" text-white bg-white md:bg-transparent md:text-white md:p-0 "
              >
                Insert
              </Link>
            </li>
          </ul>
        </div>
        <div className="grid grid-flow-row-2">
          <Header />
          <div>
            <button
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              <a
                href="/login-native"
                className=" text-white bg-white md:bg-transparent md:text-white md:p-0 "
              >
                <FaUserCircle
                  className="w-5 h-5 dark:text-white hover:scale-125  "
                  role="button"
                />
              </a>
            </button>
            <a href="/parametre">
              <button
                type="button"
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                <FaUserCog
                  className="w-5 h-5 dark:text-white hover:scale-125  "
                  role="button"
                />
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
