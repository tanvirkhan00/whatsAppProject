import React from 'react';

// ICons
import { FaChevronLeft } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { IoVideocamOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { CiImageOn } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";





// Images
import image from "/src/assets/Image2.png"
import currency from "/src/assets/currency.png"

const ContactBox = () => {
    return (
        <>

            <section>
                <div className="container bg-slate-100">
                    <div>
                        <div className='flex items-center justify-between'>
                            <span><FaChevronLeft/></span>
                            <h3 className='text-[20px] font-semibold'>Contact Info</h3>
                            <p>Edit</p>
                        </div>
                        <div className='flex flex-col justify-center items-center mt-5'>
                            <img className='h-[92px]' src={image} alt="" />
                            <h1 className='text-[24px] font-bold'>Antony Das</h1>
                            <p className='text-slate-500'>+91 3892837443</p>
                        </div>
                        <div className='flex justify-between mt-3'>
                            <div className='flex flex-col items-center py-2  basis-[23%] rounded-xl bg-white'>
                                <span className='text-green-500 text-[24px]'><IoCallOutline/></span>
                                <h4 className='font-semibold'>Audio</h4>
                            </div>
                            <div className='flex flex-col items-center py-2  basis-[23%] rounded-xl bg-white'>
                                <span className='text-green-500 text-[24px]'><IoVideocamOutline/></span>
                                <h4 className='font-semibold'>Video</h4>
                            </div>
                            <div className='flex flex-col items-center py-2 basis-[23%] rounded-xl bg-white'>
                                <img src={currency} alt="" />
                                <h4 className='font-semibold'>Pay</h4>
                            </div>
                            <div className='flex flex-col items-center py-2  basis-[23%] rounded-xl bg-white'>
                                <span className='text-green-500 text-[24px]'><CiSearch/></span>
                                <h4 className='font-semibold'>Audio</h4>
                            </div>
                        </div>
                        <div className='h-[70px] bg-white px-3 mt-3 flex flex-col justify-center'>
                            <h3 className='font-semibold'>In the search of Leo Das since 2005</h3>
                            <p className='text-[14px] text-slate-400'>29 Oct 2020</p>
                        </div>
                        <p className='text-slate-400 mt-3 px-3'>LIVE SCHEDULE</p>
                        <div className='mt-5 bg-white flex flex-col gap-2'>
                            <div className='flex justify-between items-center border-b-2 px-3 py-2'>
                                <div>
                                    <h1 className='font-semibold'>In the Search of Soul</h1>
                                    <p className='text-slate-500'>22 Jan 2024, 8:30 AM</p>
                                </div>
                                <p className='text-[17px] text-green-600'>Remind</p>
                            </div>
                            <div className='flex justify-between items-center border-b-2 px-3 py-2'>
                                <div>
                                    <h1 className='font-semibold'>Let's talk about sound</h1>
                                    <p className='text-slate-500'>23 Jan 2024, 8:30 AM</p>
                                </div>
                                <p className='text-[17px] text-green-600'>Remind</p>
                            </div>
                            <div className='flex justify-between items-center border-b-2 px-3 py-2'>
                                <div>
                                    <h1 className='font-semibold'>What is healing</h1>
                                    <p className='text-slate-500'>24 Jan 2024, 8:30 AM</p>
                                </div>
                                <p className='text-[17px] text-green-600'>Remind</p>
                            </div>
                        </div>
                        <div className='mt-5 bg-white px-3 py-2 flex flex-col gap-2'>
                            <div className='flex items-center justify-between border-b-2 py-3'>
                                <div className='flex items-center gap-3'>
                                    <span className='text-[20px]'><CiImageOn/></span>
                                    <h4 className='font-semibold'>Media, Links and Docs</h4>
                                </div>
                                <div className='flex items-center gap-2 text-slate-500'>
                                    <h4>12</h4>
                                    <span><FaChevronRight/></span>
                                </div>
                            </div>
                            <div className='flex items-center justify-between border-b-2 py-3'>
                                <div className='flex items-center gap-3'>
                                    <span className='text-[20px]'><FaRegStar/></span>
                                    <h4 className='font-semibold'>Starred Messages</h4>
                                </div>
                                <div className='flex items-center gap-2 text-slate-500'>
                                    <h4>None</h4>
                                    <span><FaChevronRight/></span>
                                </div>
                            </div>
                            <div className='flex items-center justify-between border-b-2 py-3'>
                                <div className='flex items-center gap-3'>
                                    <span className='text-[20px]'><CiSearch/></span>
                                    <h4 className='font-semibold'>Chat Search</h4>
                                </div>
                                <div className='text-slate-500'>
                                    <span><FaChevronRight/></span>
                                </div>
                            </div>
                            <span className='w-[134px] h-[5px] flex mx-auto bg-black rounded-xl'></span>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    );
};

export default ContactBox;