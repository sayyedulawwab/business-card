import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Footer = ({ React }) => (
  <div className="px-6 py-2 bg-slate-900 flex justify-evenly text-3xl">
    <a href="http://" target="_blank" rel="noopener noreferrer">
      <FaTwitterSquare className="text-gray-400" />
    </a>
    <a href="http://" target="_blank" rel="noopener noreferrer">
      <FaLinkedin className="text-gray-400" />
    </a>
    <a href="http://" target="_blank" rel="noopener noreferrer">
      <FaGithubSquare className="text-gray-400" />
    </a>
  </div>
);

export default Footer;
