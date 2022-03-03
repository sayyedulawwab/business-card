import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Info = () => (
  <>
    <a href="/">
      <img
        className="rounded-t-lg h-60 w-full object-cover object-top"
        src="https://avatars.githubusercontent.com/u/38081373?v=4"
        alt=""
      />
    </a>
    <div className="p-6 text-center">
      <h5 className="text-2xl font-medium mb-2">Muhammad Sayyedul Awwab</h5>
      <p className="text-base mb-2 text-orange-300">Frontend Developer</p>
      <a
        className="text-xs mb-2"
        href="/"
        target="_blank"
        rel="noopener noreferrer"
      >
        sayyedulawwab.website
      </a>
      <div className="p-2 flex">
        <a
          href="/"
          className="flex items-center mx-1 px-6 py-2.5 bg-gray-200 text-black font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-gray-400 hover:shadow-lg focus:bg-gray-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-500 active:shadow-lg transition duration-150 ease-in-out"
        >
          <MdEmail className="text-sm mr-1" /> Email
        </a>
        <a
          href="/"
          className="flex items-center mx-1 px-6 py-2.5 bg-blue-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          <FaLinkedin className="text-sm mr-1" /> LinkedIn
        </a>
      </div>
    </div>
  </>
);

export default Info;
