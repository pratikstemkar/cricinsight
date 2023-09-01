import { LogIn } from "lucide-react";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className="py-2 px-2 lg:px-12 flex w-full justify-between items-center">
      <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight">
        Insight
      </h1>
      <div className="space-x-2">
        <Button variant="default" size="sm">
          <LogIn className="mr-2 h-4 w-4" />
          <span>Login</span>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
