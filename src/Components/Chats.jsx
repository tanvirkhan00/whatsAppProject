import React from 'react';

// Icons
import { TiPlus } from "react-icons/ti";
import { IoCheckmarkDone } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { IoCamera } from "react-icons/io5";





// Images
import image1 from "/src/assets/Oval.png"
import image2 from "/src/assets/Image2.png"
import image3 from "/src/assets/Image3.png"
import image4 from "/src/assets/Image4.png"
import image5 from "/src/assets/Image5.png"
import image6 from "/src/assets/Image6.png"
import image7 from "/src/assets/Image7.png"
import image8 from "/src/assets/Image8.png"
import image9 from "/src/assets/Image9.png"
import { Link } from 'react-router-dom';


const Chats = () => {
    return (
        <>

            <section>
                <div className="container">
                    <div>
                        <div className='flex justify-between items-center'>
                            <h1 className='font-bold text-[34px]'>Chats</h1>
                            <span className='bg-green-600 text-white rounded-full p-1'><TiPlus /></span>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className='flex items-center gap-3'>
                                <div className='basis-[15%]'>
                                    <img src={image1} alt="Oval" />
                                </div>
                                <div className='basis-[85%]  border-b-2 pb-1'>
                                    <div className='flex items-center justify-between'>
                                        <h2 className='text-[16px] font-semibold'>Arjun Das Mygate</h2>
                                        <h4 className='text-[14px] text-green-500'>12:35 PM</h4>
                                    </div>
                                    <div className='flex justify-between items-center gap-2'>
                                        <p className='text-[14px] text-slate-400'>Hey i got to know your are anid a design tast, ATB for same</p>
                                        <span className='text-[12px] bg-green-500 px-2 rounded-3xl'>10</span>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className='basis-[15%]'>
                                    <Link to="/contact"><img src={image2} alt="Image" /></Link>
                                </div>
                                <div className='basis-[85%] border-b-2 pb-1'>
                                    <div className='flex items-center  justify-between'>
                                        <h2 className='text-[16px] font-semibold'>Antony Das</h2>
                                        <h4 className='text-[14px] text-slate-500'>11:55 AM</h4>
                                    </div>
                                    <div className='flex gap-1   items-center'>
                                        <span className='text-green-500'><IoCheckmarkDone /></span>
                                        <p className='text-[14px] text-slate-400'>What kind of strategy is better?</p>
                                    </div>
                                </div>
                            </div>
                            <Link to="/profile">
                                <div className='flex items-center gap-3'>
                                    <div className='basis-[15%]'>
                                        <img src={image3} alt="Image" />
                                    </div>
                                    <div className='basis-[85%] border-b-2 pb-1'>
                                        <div className='flex items-center  justify-between'>
                                            <h2 className='text-[16px] font-semibold'>Elisa das Zoho</h2>
                                            <h4 className='text-[14px] text-slate-500'>Yesterday</h4>
                                        </div>
                                        <div className='flex gap-1   items-center'>
                                            <span className='text-green-500'><FaMicrophone /></span>
                                            <p className='text-[14px] text-slate-400'>0:14</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <div className='flex items-center gap-3'>
                                <div className='basis-[15%]'>
                                    <img src={image4} alt="Image" />
                                </div>
                                <div className='basis-[85%] border-b-2 pb-1'>
                                    <div className='flex items-center  justify-between'>
                                        <h2 className='text-[16px] font-semibold'>Harold Das</h2>
                                        <h4 className='text-[14px] text-slate-500'>Yesterday</h4>
                                    </div>
                                    <div className='flex gap-1   items-center'>
                                        <span className='text-green-500'><IoCheckmarkDone /></span>
                                        <p className='text-[14px] text-slate-400'>Bro, I have a good idea!</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className='basis-[15%]'>
                                    <img src={image5} alt="Image" />
                                </div>
                                <div className='basis-[85%] border-b-2 pb-1'>
                                    <div className='flex items-center  justify-between'>
                                        <h2 className='text-[16px] font-semibold'>Revathi Freshworks</h2>
                                        <h4 className='text-[14px] text-slate-500'>Yesterday</h4>
                                    </div>
                                    <div className='flex gap-1   items-center'>
                                        <span className='text-slate-500'><IoCamera /></span>
                                        <p className='text-[14px] text-slate-400'>Photo</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className='basis-[15%]'>
                                    <img src={image6} alt="Image" />
                                </div>
                                <div className='basis-[85%] border-b-2 pb-1'>
                                    <div className='flex items-center  justify-between'>
                                        <h2 className='text-[16px] font-semibold'>Kishore Rocketlane</h2>
                                        <h4 className='text-[14px] text-slate-500'>Yesterday</h4>
                                    </div>
                                    <div className='flex gap-1   items-center'>
                                        <p className='text-[14px] text-slate-400'>Actually I wanted to check with you about your online business plan on our...</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className='basis-[15%]'>
                                    <img src={image7} alt="Image" />
                                </div>
                                <div className='basis-[85%] border-b-2 pb-1'>
                                    <div className='flex items-center  justify-between'>
                                        <h2 className='text-[16px] font-semibold'>Herold Das</h2>
                                        <h4 className='text-[14px] text-slate-500'>Wednesday</h4>
                                    </div>
                                    <div className='flex gap-1'>
                                        <span className='text-green-500 max-h-fit'><IoCheckmarkDone /></span>
                                        <p className='text-[14px] text-slate-400'>Welcome, to make design process faster, look a Pixsellz</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className='basis-[15%]'>
                                    <img src={image8} alt="Image" />
                                </div>
                                <div className='basis-[85%] border-b-2 pb-1'>
                                    <div className='flex items-center  justify-between'>
                                        <h2 className='text-[16px] font-semibold'>LEO Das</h2>
                                        <h4 className='text-[14px] text-slate-500'>Wednesday</h4>
                                    </div>
                                    <div className='flex gap-1'>
                                        <span className='text-green-500 max-h-fit'><IoCheckmarkDone /></span>
                                        <p className='text-[14px] text-slate-400'>Ok, have a good trip!</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className='basis-[15%]'>
                                    <img src={image9} alt="Image" />
                                </div>
                                <div className='basis-[85%] border-b-2 pb-1'>
                                    <div className='flex items-center  justify-between'>
                                        <h2 className='text-[16px] font-semibold'>Joshua Lawrence</h2>
                                        <h4 className='text-[14px] text-slate-500'>10/20/19</h4>
                                    </div>
                                    <div className='flex gap-1'>
                                        <span className='text-green-500 max-h-fit'><IoCheckmarkDone /></span>
                                        <p className='text-[14px] text-slate-400'>Do you like WhatsApp UI?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Chats;