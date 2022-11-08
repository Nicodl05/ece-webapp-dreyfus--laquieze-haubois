import Link from "next/link";
import profile_image from '/public/ece.png';
import Image from 'next/image';
import Header from "./Header";

 //mx-auto
const NavBar = () => {
    return (       
        <nav className=' bg-[#007178]   border-blue-400  dark:border-gray-600 dark:bg-gray-700  '>            
            <div className=" flex flex-wrap w-screen  items-center text-center justify-between     ">
                <a href="https://www.ece.fr/">
                    <Image src={profile_image} alt="Picture of the author" width={200} height={100} className="bg-white dark:bg-gray-700" />                    
                </a>                    
                <ul className="flex flex-col  text-center  justify-between items-center  border-blue-400 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:dark md:dark:bg-transparent ">
                    <li className="hover:text-white hover:underline ">
                        <Link href="/" className="block py-2 pr-4 pl-3  justify-center text-center items-center rounded md:bg-transparent md:text-white md:p-0 md:dark:text-white dark:bg-white md:dark:bg-transparent" >Home </Link>
                    </li>
                    <li className="hover:text-white  hover:underline">
                        <Link href="/about" className="block py-2 pr-4 pl-3 text-white bg-white rounded md:bg-transparent md:text-white md:p-0 ">About </Link>
                    </li>
                    <li className="hover:text-white hover:underline">
                        <Link href="/contacts" className="block py-2 pr-4 pl-3 text-white bg-white rounded md:bg-transparent md:text-white md:p-0 ">Contact </Link>
                    </li>
                    <li className="hover:text-white hover:underline ">
                        <Link href="/articles" className="block py-2 pr-4 pl-3 text-white bg-white rounded md:bg-transparent md:text-white md:p-0 ">Articles </Link>
                    </li>
                    

                </ul>     
                <div className="text-right">            
                    <Header /> 
                </div>     
            </div>
        </nav>
    );
}
export default NavBar;