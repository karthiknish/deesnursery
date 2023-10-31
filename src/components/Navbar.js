import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Logo from "../images/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link href="/">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <img className="w-1/2" href="/" src={Logo.src} />
          </motion.div>
        </Link>
        {/* Desktop Menu */}
        <div className="hidden  items-center md:flex space-x-4">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            About Us
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Staff Vacancy
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Curriculum
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Nursery
          </a>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900">
            Contact Us
          </Link>
          <Link
            href="#"
            className="bg-primary text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Book a Nursery Visit
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          >
            {isOpen ? (
              <AiOutlineClose className="text-2xl" />
            ) : (
              <AiOutlineMenu className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="container mx-auto px-4 py-2 flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Contact Us
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                About Us
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Staff Vacancy
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Curriculum
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Nursery
              </a>
              <a
                href="#"
                className="bg-primary text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Book a Nursery Visit
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
