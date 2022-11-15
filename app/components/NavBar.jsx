import Link from "next/link";
import profile_image from "/public/ece.png";
import Image from "next/image";
import Header from "./Header";

//mx-auto
const NavBar = () => {
  return (
    <nav className=" bg-[#007178]   border-blue-400  dark:border-gray-600 dark:bg-gray-700  ">
      <div className="  grid grid-cols-3  w-screen  items-center justify-center ">
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
                className="block py-2 pr-4 pl-3  md:bg-transparent md:text-white md:p-0 md:dark:text-white dark:bg-white md:dark:bg-transparent"
              >
                Home
              </Link>
            </li>
            <li className="hover:text-white  hover:underline hover:scale-110  text-2xl">
              <Link
                href="/about"
                className="block py-2 pr-4 pl-3 text-white bg-white  md:bg-transparent md:text-white md:p-0 "
              >
                About
              </Link>
            </li>
            <li className="hover:text-white hover:underline hover:scale-110  text-2xl">
              <Link
                href="/contacts"
                className="block py-2 pr-4 pl-3 text-white bg-white  md:bg-transparent md:text-white md:p-0 "
              >
                Contact
              </Link>
            </li>
            <li className="hover:text-white hover:underline hover:scale-110  text-2xl">
              <Link
                href="/articles"
                className="block py-2 pr-4 pl-3 text-white bg-white md:bg-transparent md:text-white md:p-0 "
              >
                Articles
              </Link>
            </li>
            <li className="hover:text-white hover:underline hover:scale-110  text-2xl">
              <Link
                href="/login-native"
                className="block py-2 pr-4 pl-3 text-white bg-white md:bg-transparent md:text-white md:p-0 "
              >
                Login
              </Link>
            </li>
            <li className="hover:text-white hover:underline hover:scale-110 text-2xl">
              <Link
                href="/login-controlled"
                className="block py-2 pr-4 pl-3 text-white bg-white md:bg-transparent md:text-white md:p-0 "
              >
                Login 2
              </Link>
            </li>
          </ul>
        </div>
        <div className="justify-end">
          <Header></Header>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
