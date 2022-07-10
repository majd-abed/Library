import React from "react";
import { Logo, Container, Dashboard } from "./";
const Navbar = () => {
  return (
    <main className="shadow-sm border-b">
      <Container>
        <div className='flex justify-between items-center px-5'>
          <div>
            <Logo />
          </div>
          <Dashboard />
        </div>
      </Container>
    </main>
  );
};

export default Navbar;
