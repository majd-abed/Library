import React from "react";
import { Logo, Container, Dashboard, DarkMode } from "./";
const Navbar = () => {
  return (
    <main className='shadow-sm border-b dark:border-slate-500 dark:bg-slate-800'>
      <Container>
        <div className='flex justify-between items-center px-5 relative'>
          <div className='bg-white dark:bg-slate-800 dark:border-slate-500 absolute -bottom-[1.9rem] right-[1.65rem] border-2 border-t-0 rounded-b-full'>
            <DarkMode />
          </div>
          <div className='flex justify-between items-center flex-1'>
            <Logo />
          </div>
          <Dashboard />
        </div>
      </Container>
    </main>
  );
};

export default Navbar;
