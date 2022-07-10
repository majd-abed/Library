import React from "react";
import Container from "./Container";
const Footer = () => {
  return (
    <div className='bg-gray-300 dark:bg-slate-800 dark:text-gray-100'>
      <Container>
        <div className='grid grid-cols-2 smx:grid-cols-1 items-evenly pt-6 px-20'>
          <div className='sm:pl-16'>
            Contact Info:
            <p>Email: test@test.com</p>
            <p>Phone: +96399999999</p>
          </div>
          <div className='flex py-2 pr-2 sm:justify-end'>
            <p className="w-1/2">
              Address: <br /> Test road, City, Country
            </p>
          </div>
          <p className='font-semibold sm:col-span-2 text-center pb-4'>
            2022 All rights reserved
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
