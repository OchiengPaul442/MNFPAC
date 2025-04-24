'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="p-4">
      <footer className="relative bg-[#221E19] rounded-[50px] text-white w-full px-4 py-8">
        <div className="flex flex-col items-center">
          <h2 className="text-center font-medium mb-8 text-lg tracking-wide">
            CONTACTS:
          </h2>

          <div className="flex flex-col items-center space-y-6">
            {/* WhatsApp */}
            <div className="flex flex-col items-center">
              <FaWhatsapp className="text-5xl mb-4" />
              <span className="text-lg">+256701648008</span>
            </div>

            {/* Email */}
            <div className="flex items-center mt-6">
              <Image
                src="/svgs/contact-icon.svg"
                alt="Contact"
                width={36}
                height={36}
                className="mr-4"
              />
              <span className="text-lg">mariamndagire2003@yahoo.com</span>
            </div>
          </div>
        </div>

        {/* Back arrow */}
        <Link href="#" className="absolute max-md:top-6 md:bottom-6 left-6">
          <Image src="/svgs/back-icon.svg" alt="Back" width={40} height={40} />
        </Link>
      </footer>
    </div>
  );
};

export default Footer;
