import { LogIn } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { DarkToggle } from "./DarkToggle";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-10">
      <nav className="max-w-7xl p-2 flex justify-between items-center m-auto">
        <Link href="/">
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight hover:cursor-pointer hover:text-green-600">
            CricInsight
          </h1>
        </Link>
        <div className="space-x-2">
          <DarkToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
