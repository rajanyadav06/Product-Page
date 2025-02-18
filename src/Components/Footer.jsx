const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-white text-2xl font-bold">{/* Logo Here */}</div>
          </div>
  
          <div>
            <h3 className="text-gray-400 uppercase text-sm">Social Media</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-gray-300">LinkedIn</a></li>
              <li><a href="#" className="hover:text-gray-300">Twitter</a></li>
              <li><a href="#" className="hover:text-gray-300">GitHub</a></li>
            </ul>
          </div>
  
          <div>
            <h3 className="text-gray-400 uppercase text-sm">Solutions</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-gray-300">API Platform</a></li>
              <li><a href="#" className="hover:text-gray-300">Banking</a></li>
              <li><a href="#" className="hover:text-gray-300">Cards</a></li>
            </ul>
          </div>
  
          <div>
            <h3 className="text-gray-400 uppercase text-sm">Developers</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-gray-300">API Documentation</a></li>
              <li><a href="#" className="hover:text-gray-300">API SDK’s</a></li>
            </ul>
          </div>
        </div>
  
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-400 text-sm">Newsletter</div>
          <div className="mt-4 md:mt-0 flex items-center border border-gray-500 rounded-lg overflow-hidden w-full md:w-auto">
            <input type="email" placeholder="Email address" className="bg-gray-800 px-4 py-2 text-white focus:outline-none w-full md:w-auto" />
            <button className="bg-green-500 px-4 py-2 text-white">Submit</button>
          </div>
        </div>
  
        <div className="mt-10 text-gray-400 text-xs flex flex-wrap justify-center md:justify-between border-t border-gray-700 pt-4 space-x-4 md:space-x-0">
          <a href="#" className="hover:text-gray-300">Terms and Conditions</a>
          <a href="#" className="hover:text-gray-300">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300">Cookies Policy</a>
          <a href="#" className="hover:text-gray-300">Manage Cookies</a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  