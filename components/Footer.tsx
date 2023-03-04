import type { FC } from 'react';
import Envelope from './svg/Envelope';
import Phone from './svg/Phone';
import Pin from './svg/Pin';

const Footer: FC = () => {
  return (
    <>
      <div className="flex w-full items-center justify-between bg-green-500 p-10 text-white">
        <div className="flex flex-col space-y-4">
          <div>
            <p className="text-sm uppercase">get in touch with us</p>
            <h1 className="text-3xl font-black uppercase">
              be ready for an unforgettable trip!
            </h1>
          </div>
          <p className="pb-8">
            I'm baby tacos distillery VHS pinterest. Wolf moon ascot edison bulb
            shabby chic everyday carry.
          </p>
          <button className="max-w-fit rounded-full border-2 border-white px-8 py-4 font-bold uppercase transition-all hover:bg-white hover:text-green-500">
            contact us
          </button>
        </div>
      </div>
      <div className="flex w-full items-center justify-between bg-green-700 p-10 text-white">
        <div className="flex flex-col">
          <div className="flex justify-between space-x-10">
            <div className="flex w-1/2 flex-col space-y-6">
              <div className="flex items-center justify-between space-x-2">
                <img
                  src="/assets/images/landing/swc-logo.png"
                  className="w-24"
                ></img>
                <span className="text-xl font-semibold leading-tight">
                  SINTRA WELCOME CENTRE
                </span>
              </div>
              <span className="text-sm">
                I'm baby tacos distillery VHS pinterest. Wolf moon ascot edison
                bulb shabby chic everyday carry. I'm baby tacos distillery VHS
                pinterest. Wolf moon ascot edison bulb shabby chic everyday
                carry.
              </span>
            </div>

            <div className="flex w-1/2">
              <div className="flex flex-col space-y-2 font-rubik text-sm">
                <span className="text-lg">Contact Us</span>
                <hr />
                <span className="text-base">
                  Feel free to contact and reach us!
                </span>
                <div className="flex space-x-2">
                  <Phone className="w-4" strokeWidth={2} />
                  <span>+351 915 654 645</span>
                </div>
                <div className="flex space-x-2">
                  <Envelope className="w-4" strokeWidth={2} />
                  <span>+351 915 654 645</span>
                </div>
                <div className="flex space-x-2">
                  <Pin className="w-4" strokeWidth={2} />
                  <span>+351 915 654 645</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex"></div>
        </div>
      </div>
      <div className="flex w-full items-center justify-between bg-green-800 py-5 px-10 text-white">
        <span className="flex text-[10px]">
          © 2021 SINTRA WELCOME CENTRE
          <br />
          ALL RIGHTS RESERVED
        </span>
        <div className="flex items-center divide-x-2 text-xs">
          <span className="px-3 first:pl-0">Privacy Policy</span>
          <span className="px-3">Terms and Conditions</span>
          <span className="px-3 last:pr-0">FAQ</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
