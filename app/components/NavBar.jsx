import Link from "next/link";
import { ImMenu } from "react-icons/im";


const NavBar = () => {

    return (
        <nav className='flex justify-between item-center h-16 bg-white text-black relative shadow-sm font-mono bg-gray-50 rounded border-gray-500' role='navigation'>
            <Link href="/" className="pl-8">
                Home
            </Link>
            <div className="px-4 cursor-pointer md:hidden text-red-500 text-xl">
                <ImMenu />

            </div>
            <ul className="space-x-8 ">
                <li className=" text-primaire">
                    <Link href="/" className="pr-8">Home </Link>
                </li>
                <li>
                    <Link href="/about" className="pr-8">About </Link>
                </li>
                <li>
                    <Link href="/contacts" className="pr-8">Contact </Link>
                </li>
                <li>
                    <Link href="/articles" className="pr-8">Articles </Link>
                </li>
            </ul>

        </nav>
    );
}
export default NavBar;