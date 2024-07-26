import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center gap-1">
          <Image
            src="/logo.png"
            alt="Car Hub Logo"
            width={48}
            height={18}
            className="object-contain"
          />
          <h1 className="font-bold md:text-3xl">
            Wheel<span className="text-primary-purple">Zone</span>
          </h1>
        </Link>

        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="text-primary-purple rounded-full shadow bg-white min-w-[130px] font-semibold"
        />
      </nav>
    </header>
  );
};

export default Navbar;
