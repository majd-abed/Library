import React from "react";
import { TbApps } from "react-icons/tb";

const Dashboard = () => {
  return (
    <div className="w-32 flex justify-end">
    <div className='flex items-center bg-gray-100 rounded-full pl-2 py-1 max-w-[2.6rem] hover:max-w-[10rem] duration-300 overflow-hidden cursor-pointer'>
      <div className='w-7 h-7 '>
        <TbApps className='w-7 h-7'/>
      </div>
      <div className='w-24 pl-2 font-semibold'>Dashboard</div>
    </div>
    </div>
  );
};

export default Dashboard;
