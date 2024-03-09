import React from "react";

const Footer = () => {

  return (
    <div className="bg-[#a3dfd9] rounded-tl-3xl rounded-br-3xl">
      <div className="container mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <footer className="primary-color">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold leading-7 primary-color sm:text-3xl sm:truncate">
                Get the latest updates
              </h2>
              <p className="mt-1 text-sm leading-5 primary-color">
                Subscribe to our newsletter for the latest news and updates.
              </p>
            </div>
            <div className="mt-4 flex md:mt-0 md:ml-4">
              <form className="flex-1 flex items-center sm:max-w-xs">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="block w-full py-2 px-4 rounded-md border-transparent primary-color placeholder-gray-500 focus:ring-white focus:border-white sm:text-sm"
                />
                <div className="ml-3 rounded-md shadow-sm">
                  <button
                    type="submit"
                    className="flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md primary-color focus:outline-none"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 md:flex md:items-center md:justify-between">
            <div className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 md:grid-cols-4">
              {/* Column 1 */}
              <div className="primary-color">
                <h3 className="text-lg font-semibold leading-6">About Us</h3>
                <p className="mt-2 primary-color">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula eros ut varius.
                </p>
              </div>

              {/* Column 2 */}
              <div className="primary-color">
                <h3 className="text-lg font-semibold leading-6">Products</h3>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a href="#" className="primary-color hover:text-gray-300">Product 1</a>
                  </li>
                  <li>
                    <a href="#" className="primary-color hover:text-gray-300">Product 2</a>
                  </li>
                  {/* Add more product links here */}
                </ul>
              </div>

              {/* Column 3 */}
              <div className="primary-color">
                <h3 className="text-lg font-semibold leading-6">Resources</h3>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a href="#" className="primary-color hover:text-gray-300">Resource 1</a>
                  </li>
                  <li>
                    <a href="#" className="primary-color hover:text-gray-300">Resource 2</a>
                  </li>
                  {/* Add more resource links here */}
                </ul>
              </div>

              {/* Column 4 */}
              <div className="primary-color">
                <h3 className="text-lg font-semibold leading-6">Contact</h3>
                <p className="mt-2 primary-color">
                  123 Street Name, City, Country<br />
                  Email: example@example.com<br />
                  Phone: +123 456 789
                </p>
              </div>
            </div>
            <p className="mt-8 text-base leading-6 primary-color md:mt-0 md:order-1">
              &copy; {new Date().getFullYear()} Company Name. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
