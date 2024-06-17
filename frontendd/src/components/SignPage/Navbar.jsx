import Logo from "../../assets/svgs/logo";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Navbar = ({ children }) => {
  return (
    <div className="flex py-2 px-20 justify-between w-full h-14 ">
      <Link to={"/"}>
        <div className="flex h-14 w-32">
          <Logo />
        </div>
      </Link>
      <div className="flex py-2 {} justify-center items-center gap-x-5">
        <p className="cursor-pointer hover:text-secondary transition-colors duration-500 text-slate-400">
          FAQ
        </p>
        <p className="cursor-pointer text-slate-400 hover:text-secondary transition-colors">
          features
        </p>
        {children}
      </div>
    </div>
  );
};
export default Navbar;
