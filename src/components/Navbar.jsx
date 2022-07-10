import React from "react";
import { Logo, Container, Dashboard ,DarkMode} from "./";
const Navbar = () => {
  return (
    <main className="shadow-sm border-b dark:border-slate-500 dark:bg-slate-800">
      <Container>
        <div className='flex justify-between items-center px-5'>
          <div className='flex justify-between items-center w-1/2'>
            <Logo />
          <DarkMode/>
          </div>
          <Dashboard />
        </div>
      </Container>
    </main>
  );
};

export default Navbar;
