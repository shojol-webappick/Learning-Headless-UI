import Dropdown from "./Dropdown";

const Navbar = () => {
  return (
    <nav className=" bg-blue-500/30 text-blue-600 font-bold py-4">
      <div className="flex justify-between items-center container mx-auto">
        <h3 className="text-2xl font-bold text-blue-600">My Website</h3>
        <ul className="flex justify-center items-center gap-5">
          <li>
            <a className="hover:text-blue-700" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-blue-700" href="/about">
              About
            </a>
          </li>
          <li>
            <a className="hover:text-blue-700" href="/contact">
              Contact
            </a>
          </li>
          <li>
            <Dropdown />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
