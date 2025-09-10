import Image from "next/image";
import Link from "next/link";

interface HeaderProps {}
const Logo: React.FC<HeaderProps> = () => {
  return (
    <Link href="/">
      {/* <Image
        src="/images/logo/logo.svg"
        alt="logo"
        width={117}
        height={34}
        style={{ width: "auto", height: "auto" }}
        quality={100}
        priority={true}
        className="dark:hidden"
      />
      <Image
        src="/images/logo/DarkModeLogo.svg"
        alt="logo"
        width={160}
        height={50}
        style={{ width: "auto", height: "auto" }}
        quality={100}
        className="dark:block hidden"
      /> */}
      {/* <span
        style={{ width: "auto", height: "auto" }}
        className="w-100 h-auto instrument-font italic font-normal dark:text-white/70"
      >
        {" "}
        Element Labs
      </span> */}
      <h3 className="w-auto h-auto instrument-font italic font-normal dark:text-white/70">Element Labs</h3>
    </Link>
  );
};

export default Logo;
