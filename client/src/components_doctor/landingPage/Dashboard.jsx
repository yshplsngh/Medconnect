import React from 'react';

const Dashboard = () => {
  return (
    <main className="p-5 mt-12 bg-gray-900 text-white">
      <div className="space-y-5">
        <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-5">
          <div className="card bg-gray-800 p-5 shadow-md rounded-md text-gray-100">
            <div className="flex justify-between">
              <div className="flex-grow">
                <span className="text-xs text-gray-500 uppercase font-bold">Today Revenue</span>
                <h3 className="text-2xl">$2100</h3>
              </div>
              <div className="text-center flex-shrink-0">
                <div id="today-revenue-chart" className="apex-charts"></div>
                <span className="text-success fw-bold fs-13">
                  <i className='uil uil-arrow-up'></i> 10.21%
                </span>
              </div>
            </div>
          </div>

          <div className="card bg-gray-800 p-5 shadow-md rounded-md text-gray-100">
            <div className="flex justify-between">
              <div className="flex-grow">
                <span className="text-xs text-gray-500 uppercase font-bold">Product Sold</span>
                <h3 className="text-2xl">558</h3>
              </div>
              <div className="align-self-center flex-shrink-0">
                <div id="today-product-sold-chart" className="apex-charts"></div>
                <span className="text-danger fw-bold fs-13">
                  <i className='uil uil-arrow-down'></i> 5.05%
                </span>
              </div>
            </div>
          </div>

          <div className="card bg-gray-800 p-5 shadow-md rounded-md text-gray-100">
            <div className="flex justify-between">
              <div className="flex-grow">
                <span className="text-xs text-gray-500 uppercase font-bold">New Customers</span>
                <h3 className="text-2xl">65</h3>
              </div>
              <div className="align-self-center flex-shrink-0">
                <div id="today-new-customer-chart" className="apex-charts"></div>
                <span className="text-success fw-bold fs-13">
                  <i className='uil uil-arrow-up'></i> 25.16%
                </span>
              </div>
            </div>
          </div>

          <div className="card bg-gray-800 p-5 shadow-md rounded-md text-gray-100">
            <div className="flex justify-between">
              <div className="flex-grow">
                <span className="text-xs text-gray-500 uppercase font-bold">New Visitors</span>
                <h3 className="text-2xl">958</h3>
              </div>
              <div className="align-self-center flex-shrink-0">
                <div id="today-new-visitors-chart" className="apex-charts"></div>
                <span className="text-danger fw-bold fs-13">
                  <i className='uil uil-arrow-down'></i> 5.05%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;