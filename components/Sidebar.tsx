import React from 'react';
import { Menu } from 'lucide-react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <>
      
      <div className="sm:hidden fixed top-0 left-0 right-0 bg-white p-3 flex justify-between items-center z-10">
        <img src="ZuAi.svg" alt="logo"/>
        <Menu className="h-6 w-6" />
      </div>

     
      <div className="hidden sm:flex fixed inset-y-0 left-0 bg-white m-2 p-2 flex-col gap-4 rounded-2xl h-[calc(100vh-1rem)]">
        <div className="py-2">
          <img src="ZuAi.svg" alt="logo" />
        </div>
        <div className="flex flex-col gap-2">
          <Link href="/"><img src="/dashboard.svg" alt="Dashboard" /></Link>
          <img src="/S2.svg" alt="Menu item 2" className="p-2" />
          <img src="/S3.svg" alt="Menu item 3" className="p-2" />
          <img src="/S4.svg" alt="Menu item 4" className="p-2" />
        </div>
      </div>

    </>
  );
};

export default Sidebar;