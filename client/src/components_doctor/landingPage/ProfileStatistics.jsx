import React from 'react';

function ProfileStatistics({name, speciality, email, img}) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="text-center mb-4">
          <img
            src={img}
            // src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
            alt="Profile Picture"
            className="rounded-full w-24 h-24 mx-auto"
          />
          <h4 className="text-xl mt-2">{name}</h4>
          <p className="text-gray-500 text-sm">{speciality} | <a href="#!" className="text-blue-500">{email}</a></p>
        </div>
        <div className="mb-4 pb-2 flex justify-center">
          <a href="#!" className="bg-blue-500 text-white rounded-full p-3 mr-1">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#!" className="bg-blue-400 text-white rounded-full p-3 mx-1">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#!n" className="bg-blue-600 text-white rounded-full p-3 ml-1">
            <i className="fab fa-skype"></i>
          </a>
        </div>
        <button className="bg-blue-500 text-white rounded-lg py-3 w-full">
          Chat Now
        </button>
        <div className="flex justify-between text-center mt-5 mb-2">
          <div className="flex-1">
            <p className="text-lg mb-1">8471</p>
            <p className="text-gray-500 text-sm">Wallets Balance</p>
          </div>
          <div className="flex-1 px-3">
            <p className="text-lg mb-1">8512</p>
            <p className="text-gray-500 text-sm">Followers</p>
          </div>
          <div className="flex-1">
            <p className="text-lg mb-1">4751</p>
            <p className="text-gray-500 text-sm">Total Transactions</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileStatistics;
