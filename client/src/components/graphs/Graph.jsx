import React from 'react';

// import BanknotesIcon from 'path-to-banknotes-icon';
// import UserIcon from 'path-to-user-icon';
// import UserPlusIcon from 'path-to-user-plus-icon';
// import ChartBarIcon from 'path-to-chart-bar-icon';
import BanknotesIcon from './imgs/Dentist.svg';
import UserIcon from './imgs/Dermatologist.svg';
import UserPlusIcon from './imgs/Psychiatrist.svg';
import ChartBarIcon from './imgs/Obgyn.svg';

export const statisticsCardsData = [
  {
    color: "blue",
    // icon: "",
    icon: BanknotesIcon,
    title: "Today's Money",
    value: "$53k",
    footer: {
      color: "text-green-500",
      value: "+55%",
      label: "than last week",
    },
  },
  {
    color: "pink",
    // icon: "",
    icon: UserIcon,
    title: "Today's Users",
    value: "2,300",
    footer: {
      color: "text-green-500",
      value: "+3%",
      label: "than last month",
    },
  },
  {
    color: "green",
    // icon: "",
    icon: UserPlusIcon,
    title: "New Clients",
    value: "3,462",
    footer: {
      color: "text-red-500",
      value: "-2%",
      label: "than yesterday",
    },
  },
  {
    color: "orange",
    // icon: "",
    icon: ChartBarIcon,
    title: "Sales",
    value: "$103,430",
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: "than yesterday",
    },
  },
];

function StatisticsCard({ icon, title, value, footer }) {
  return (
    <div className={`bg-${footer.color} p-6 rounded-lg shadow-md`}>
      <div className="flex items-center">
        {React.createElement(icon, {
          className: "w-6 h-6 text-white",
        })}
        <span className="ml-2 text-xl font-semibold text-gray-800">{title}</span>
      </div>
      <div className="mt-4">
        <p className="text-2xl font-semibold text-white">{value}</p>
      </div>
      <div className="mt-6">
        <p className={`text-sm font-normal text-white ${footer.color}`}>
          <strong>{footer.value}</strong>&nbsp;{footer.label}
        </p>
      </div>
    </div>
  );
}

function StatisticsCardsContainer({ statisticsCardsData }) {
  return (
    <div className="mt-12">
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        {statisticsCardsData.map(({ icon, title, footer }, index) => (
          <StatisticsCard
            key={index}
            icon={icon}
            title={title}
            value={statisticsCardsData[index].value}
            footer={footer}
          />
        ))}
      </div>
    </div>
  );
}

export default StatisticsCardsContainer;
