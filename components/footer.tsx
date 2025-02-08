import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaBuilding
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="py-16"
      style={{
        background: "linear-gradient(to bottom, #000000 0%, #000000 100%)"
      }}
    >
      <div className="container mx-auto px-4">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          {/* Company Info Section */}
          <div className="md:text-left ml-20">
            <h4 className="text-3xl font-bold mb-6">Contact Info</h4>
            <p className="flex items-center text-lg font-semibold mb-2">
              <FaBuilding className="mr-3" /> Zimulate Consultech LLP</p>
            <p className="flex items-center text-lg font-semibold mb-2 ">
              <FaMapMarkerAlt className="mr-3" /> Edachira, Kakkanad, Ernakulam.
            
            </p>
            <p className="flex items-center text-lg font-semibold mb-2">
              <FaPhoneAlt className="mr-3" />
              <a href="tel:+8867376358" className="hover:underline">
                +91 8867376358
              </a>
            </p>
            <p className="flex items-center text-lg font-semibold">
              <FaEnvelope className="mr-3" />
              <a
                href="mailto:zimulateconsultechllp@gmail.com"
                className="hover:underline"
              >
                sales@zimulateconsultech.in
              </a>
            </p>
          </div>

          {/* Explore Section */}
          <div className="text-center">
            <h4 className="text-3xl font-bold mb-6">Explore</h4>
            <ul className="space-y-3 text-xl font-semibold">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="hover:underline">
                  Services
                </a>
              </li>             
              <li>
                <a href="/about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="text-center md:text-left">
            <h4 className="text-3xl font-bold mb-6">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-8">
              <a
                href="https://www.linkedin.com/company/zimulate-consultech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="w-7 h-7 hover:text-gray-300" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="w-7 h-7 hover:text-gray-300" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="w-7 h-7 hover:text-gray-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-20 text-2xl text-center text-white font-thin">
          © 2025 Zimulate Consultech LLP. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
