import React from 'react';

// Image
import image3 from "/src/assets/Image3.png"

// Icon
import { FaChevronLeft } from "react-icons/fa6";
import { GoDeviceCameraVideo } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";



const Profile = () => {
    return (
        <>

            <section>
                <div className="container">
                    <div className='flex justify-between items-center'>
                        <span className='text-green-600 text-[25px]'><FaChevronLeft /></span>
                        <div className='flex gap-2 items-center'>
                            <img className='h-[36px]' src={image3} alt="" />
                            <div>
                                <h1 className='font-semibold text-[18px]'>Elisa Das</h1>
                                <p className='text-[14px] text-slate-500'>tap here for contact info</p>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <span className='text-green-600 text-[25px]'><GoDeviceCameraVideo /></span>
                            <span className='text-green-600 text-[25px]'><IoCallOutline /></span>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Profile;