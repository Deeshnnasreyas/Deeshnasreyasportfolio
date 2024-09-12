import { FaLinkedin } from "react-icons/fa6";
import logo from "../assets/D.png";
import { FaGithub, FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} className="mx-2" width={100} height={50} alt="Logo" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-between gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/deeshnna-ak-730869210/ "
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="cursor-pointer text-blue-300 " />
        </a>
        <a
          href="https://github.com/Deeshnnasreyas"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <FaGithub className="cursor-pointer text-blue-300 " />
        </a>
        <a
          href="https://www.instagram.com/deeshna_sreyas?igsh=MTZmMnFhNXJqd3Nvcg%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaInstagram className="cursor-pointer text-blue-300 " />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
