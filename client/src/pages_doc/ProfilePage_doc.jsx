import React from 'react';

export default function ProfilePageDoc() {
  return (
    <section className="bg-gray-100">
      <div className="container py-5">
        <div className="mb-4">
          <nav className="bg-light rounded-3 p-3 mb-4">
            <ol className="list-none p-0 m-0 flex">
              <li className="flex items-center text-blue-600 hover:underline">
                <a href='#'>Home</a>
              </li>
              <li className="flex items-center text-blue-600 hover:underline">
                <a href="#">User</a>
              </li>
              <li className="flex items-center text-gray-500" aria-current="page">User Profile</li>
            </ol>
          </nav>
        </div>

        <div className="grid lg:grid-cols-4 gap-4">
          <div className="lg:col-span-1 bg-white rounded-lg p-4">
            <div className="text-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                alt="avatar"
                className="w-36 h-36 rounded-full mx-auto"
              />
              <h1 className="text-gray-500 text-sm mb-1 mt-2">Eye Specialist</h1>
              <p className="text-gray-500 text-sm">AIIMS Delhi, India</p>
              <div className="mt-3">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600 focus:outline-none">Follow</button>
                <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-100 focus:outline-none">Message</button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 bg-white rounded-lg p-4">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold mb-4">Profile Information</h2>
              <hr className="border-gray-300" />

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <p className="font-semibold">Full Name</p>
                  <p className="text-gray-500">Johnatan Smith</p>
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-500">example@example.com</p>
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-500">(097) 234-5678</p>
                </div>
                <div>
                  <p className="font-semibold">Mobile</p>
                  <p className="text-gray-500">(098) 765-4321</p>
                </div>
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-gray-500">Bay Area, San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-4 mt-4">
              <div className="bg-white rounded-lg p-4">
                <h2 className="text-2xl font-semibold mb-4">Project Status</h2>
                <p className="mb-1 text-primary font-italic"><span className="text-primary font-italic me-1">assignment</span> Web Design</p>
                <div className="bg-gray-200 h-3 rounded-full">
                  <div className="bg-blue-500 h-full rounded-full" style={{ width: '80%' }}></div>
                </div>
                <p className="mt-4 mb-1 text-primary font-italic"><span className="text-primary font-italic me-1">assignment</span> Website Markup</p>
                <div className="bg-gray-200 h-3 rounded-full">
                  <div className="bg-blue-500 h-full rounded-full" style={{ width: '72%' }}></div>
                </div>
                <p className="mt-4 mb-1 text-primary font-italic"><span className="text-primary font-italic me-1">assignment</span> One Page</p>
                <div className="bg-gray-200 h-3 rounded-full">
                  <div className="bg-blue-500 h-full rounded-full" style={{ width: '89%' }}></div>
                </div>
                <p className="mt-4 mb-1 text-primary font-italic"><span className="text-primary font-italic me-1">assignment</span> Mobile Template</p>
                <div className="bg-gray-200 h-3 rounded-full">
                  <div className="bg-blue-500 h-full rounded-full" style={{ width: '55%' }}></div>
                </div>
                <p className="mt-4 mb-1 text-primary font-italic"><span className="text-primary font-italic me-1">assignment</span> Backend API</p>
                <div className="bg-gray-200 h-3 rounded-full">
                  <div className="bg-blue-500 h-full rounded-full" style={{ width: '66%' }}></div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h2 className="text-2xl font-semibold mb-4">Project Status</h2>
                <p className="mb-1 text-primary font-italic"><span className="text-primary font-italic me-1">assignment</span> Web Design</p>
                <div className="bg-gray-200 h-3 rounded-full">
                  <div className="bg-blue-500 h-full rounded-full" style={{ width: '80%' }}></div>
                </div>
                <p className="mt-4 mb-1 text-primary font-italic"><span className="text-primary font-italic me-1">assignment</span> Website Markup</p>
                <div className="bg-gray-200 h-3 rounded-full">
                  <div className="bg-blue-500 h-full rounded-full" style={{ width: '72%' }}></div>
                </div>
                <p className="mt-4 mb-1 text-primary font-italic"><span className="text-primary font-italic me-1">assignment</span> One Page</p>
                <div className="bg-gray-200 h-3 rounded-full">
                  <div className="bg-blue-500 h-full rounded-full" style={{ width: '89%' }}></div>
                </div>
                <p className="mt-4 mb-1 text-primary font-italic"><span className="text-primary font-italic me-1">assignment</span> Mobile Template</p>
                <div className="bg-gray-200 h-3 rounded-full">
                  <div className="bg-blue-500 h-full rounded-full" style={{ width: '55%' }}></div>
                </div>
                <p className="mt-4 mb-1 text-primary font-italic"><span className="text-primary font-italic me-1">assignment</span> Backend API</p>
                <div className="bg-gray-200 h-3 rounded-full">
                  <div className="bg-blue-500 h-full rounded-full" style={{ width: '66%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
