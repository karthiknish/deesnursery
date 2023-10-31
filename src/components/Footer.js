import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-gray-800 text-white p-8 mt-8">
      <div className="container mx-auto grid md:grid-cols-4 gap-6">
        {/* Quick Links */}
        <div>
          <h3 className="text-xl mb-4 font-bold">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {/* ... Add other links similarly ... */}
            <li>
              <a href="#" className="hover:underline">
                DEES DAY NURSERY
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                CHILDCARE
              </a>
            </li>
            {/* ... */}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl mb-4 font-bold">Address & Information</h3>
          <p>Dee's Day Nursery (Wimbledon) Ltd.</p>
          <p>Address: 2 Mansel Road, Wimbledon, London SW19 4AA</p>
          <p>Telephone: 020 8944 0284</p>
          <p>Email: info@deesnursery.co.uk</p>
          <p>Weekdays 8:00 AM to 6:00 PM.</p>
          <a
            href="http://deesnursery.co.uk"
            className="text-blue-300 hover:underline"
          >
            Website
          </a>
        </div>

        {/* Other Links */}
        <div>
          <h3 className="text-xl mb-4 font-bold">Other Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Book a show around
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Nursery Prospectus
              </a>
            </li>
            {/* ... Add other links similarly ... */}
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 items-center">
          <a href="#" className="text-2xl hover:text-blue-400">
            <FaFacebookF />
          </a>
          <a href="#" className="text-2xl hover:text-blue-400">
            <FaTwitter />
          </a>
          <a href="#" className="text-2xl hover:text-pink-400">
            <FaInstagram />
          </a>
          <a href="#" className="text-2xl hover:text-blue-300">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
