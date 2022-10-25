import Link from "next/link";
import { ImMenu } from "react-icons/im";
import profile_image from '/public/ece.png';
import Image from 'next/image';

const NavBar = () => {
    return (
        <nav className='p-3 bg-gray-50 rounded border-gray-200 dark:bg-gray-400 dark:border-blue-700 ' role='navigation'>
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="https://flowbite.com" className="flex items-center">
                    <Image src={profile_image} alt="Picture of the author" width={80} height={80} />
                    
                </a>

                <ul className="flex flex-col mt-4 bg-gray-50 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-400 md:dark:bg-transparent dark:border-gray-700 ">
                    <li className=" text-primaire">
                        <Link href="/" className="block py-2 pr-4 pl-3 text-sky bg-white-700 rounded md:bg-transparent md:text-white-700 md:p-0 md:dark:text-white dark:bg-white-600 md:dark:bg-transparent" aria-current="page">Home </Link>
                    </li>
                    <li>
                        <Link href="/about" className="block py-2 pr-4 pl-3 text-white bg-white-700 rounded md:bg-transparent md:text-white-700 md:p-0 text-white">About </Link>
                    </li>
                    <li>
                        <Link href="/contacts" className="block py-2 pr-4 pl-3 text-white bg-white-700 rounded md:bg-transparent md:text-white-700 md:p-0 text-white">Contact </Link>
                    </li>
                    <li>
                        <Link href="/articles" className="block py-2 pr-4 pl-3 text-white bg-white-700 rounded md:bg-transparent md:text-white-700 md:p-0 text-white">Articles </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default NavBar;