import React, { useState } from 'react';
import Image from 'next/image';
import UWALogo from '../public/assets/UWA Logo.png';

export default function Contact() {

  return (
    <footer className="bg-motorsports-blue shadow dark:bg-motorsports-blue">
        <div className="w-full max-w-screen-xl mx-auto p-4 px-16 py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              <div className="uppercase">
                <div className="pb-4">
                  <h2>Contact Us</h2>
                </div>
                <div className="sm:flex lowercase">
                  <div className="text-gray-400 hover:text-white dark:hover:text-white">
                    <button onClick={() => {
                      navigator.clipboard.writeText("uwamotorsportev@gmail.com"); 
                      alert("Copied to clipboard. We look forward to hearing from you soon!");
                      }} className="flex">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 8 6" aria-hidden="true"><path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z"/></svg>                  <span className="sr-only">Email</span>
                      <p className="pl-2">uwamotorsportev@gmail.com</p>
                    </button>
                  </div>
                </div>
                <div className="flex lowercase">
                  <a href="https://www.facebook.com/uwamotorsport" target='_blank' className="text-gray-400 hover:text-white dark:hover:text-white">
                    <div className="flex">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                      <span className="sr-only">Facebook page</span>
                      <p className="pl-2">facebook.com/uwamotorsport</p>
                    </div>
                  </a>
                </div>
                <div className="sm:flex lowercase pb-10">
                  <a href="https://www.instagram.com/uwamotorsport/" target='_blank' className="text-gray-400 hover:text-white dark:hover:text-white">
                    <div className="flex">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                      <span className="sr-only">Instagram page</span>
                      <p className="pl-2">uwamotorsport</p>
                      <p></p>
                    </div>
                  </a>
                </div>
                <div className="sm:flex normal-case pb-5 md:text-center">
                      <p>35 Stirling Hwy, University of Western Australia, 6009 Perth, WA</p>
                </div>
            </div>
            <div></div>
            <a href="https://www.uwa.edu.au/" target='_blank' className="flex items-center mb-4 sm:mb-0">
                <div>
                <Image src={UWALogo} alt="UWA Logo" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 pt-5">© 2023 UWA Motorsport. All Rights Reserved.</span>
                </div>
            </a>
            </div>
        </div>
    </footer>
  );
};