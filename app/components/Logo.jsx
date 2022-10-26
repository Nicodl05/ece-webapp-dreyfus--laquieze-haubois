import { HiOutlineMoon } from "react-icons/hi2";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <a className="my-2 flex items-center space-x-1 text-gray-500">
        <HiOutlineMoon className="w-10 h-10 text-gray-500" />
        <span className="font-bold text-3xl font-sans tracking-tight whitespace-nowrap "></span>
      </a>
    </Link>
  );
};

export default Logo;
