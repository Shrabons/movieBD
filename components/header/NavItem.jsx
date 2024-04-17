import Image from "next/image";
import Link from "next/link";
import LangChange from "./LangChange";

const NavItem = () => {
  return (
    <ul className="flex items-center  space-x-5">
      <li>
        <LangChange />
      </li>
      <li>
        <Link
          className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
          href="#"
        >
          <Image src="/ring.svg" width={24} height={24} alt="" />
        </Link>
      </li>
      <li>
        <Link
          className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
          href="#"
        >
          <Image src="/icons/sun.svg" width={24} height={24} alt="" />
        </Link>
      </li>
      <li>
        <Link
          className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
          href="#"
        >
          <Image src="/shopping-cart.svg" width={24} height={24} alt="" />
        </Link>
      </li>
    </ul>
  );
};

export default NavItem;
