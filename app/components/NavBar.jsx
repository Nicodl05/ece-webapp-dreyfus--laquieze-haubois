import Link from "next/link";
import profile_image from '/public/ece.png';
import Image from 'next/image';
import Header from "./Header"
 //mx-auto
const NavBar = () => {
    return (       
        <nav className='p-3  light:light border-b dark:border-gray-600 dark:bg-gray-700  '>            
            <div className="container flex flex-wrap justify-between items-center ">
                <a href="https://www.ece.fr/" className="flex items-center" >
                    <Image src={profile_image} alt="Picture of the author" width={80} height={80} />                    
                </a>
                <div className="left:80px">
                    <Header /> 
                </div>     
                <ul className="flex flex-col mt-4 bg-blue-300 border-blue-400 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:dark md:dark:bg-transparent ">
                    <li >
                        <Link href="/" className="block py-2 pr-4 pl-3 text-white bg-white rounded md:bg-transparent md:text-white md:p-0 md:dark:text-white dark:bg-white md:dark:bg-transparent" >Home </Link>
                    </li>
                    <li>
                        <Link href="/about" className="block py-2 pr-4 pl-3 text-white bg-white rounded md:bg-transparent md:text-white md:p-0 text-white">About </Link>
                    </li>
                    <li>
                        <Link href="/contacts" className="block py-2 pr-4 pl-3 text-white bg-white rounded md:bg-transparent md:text-white md:p-0 text-white">Contact </Link>
                    </li>
                    <li>
                        <Link href="/articles" className="block py-2 pr-4 pl-3 text-white bg-white rounded md:bg-transparent md:text-white md:p-0 text-white">Articles </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default NavBar;