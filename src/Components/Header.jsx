import React from 'react';

// Icons
import { FaSignal } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa6";
import { FaBatteryFull } from "react-icons/fa6";



const Header = () => {
    return (
        <>

            <header>
                <div className="container">
                    <div className='flex justify-between h-[44px] items-center'>
                        <div>
                            <h3 className='text-semibold'>9.41</h3>
                        </div>
                        <div className='flex gap-2'>
                            <span><FaSignal/></span>
                            <span><FaWifi/></span>
                            <span><FaBatteryFull/></span>
                        </div>
                    </div>
                </div>
            </header>
            
        </>
    );
};

export default Header;