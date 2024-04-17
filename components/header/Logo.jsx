import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/logo.svg" alt="logo" width={139} height={26} />
    </Link>
  );
};

export default Logo;
