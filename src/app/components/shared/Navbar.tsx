import logo from "@/app/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="container mx-auto mt-4">
      <nav className="flex justify-between">
        <Image src={logo} height={40} width={40} alt="Logo Image" />
        <ul className="flex items-center gap-5">
          <Link href="/">
            <li className="hover:text-blue-600 font-semibold">Home</li>
          </Link>
          <Link href="/apps">
            <li className="hover:text-blue-600 font-semibold">Apps</li>
          </Link>
          <Link href="/installations">
            <li className="hover:text-blue-600 font-semibold">Installation</li>
          </Link>
        </ul>
        <button className="px-6 text-white bg-linear-to-r from-[#6324e8] via-[#8b3ff0] to-[#b05cf0] ">
          Secondary
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
