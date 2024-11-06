import React from 'react';

// Image
import sent from "/src/assets/sent.png"
import imoj from "/src/assets/Imog.png"
import emoj2 from "/src/assets/emoj2.png"
import speaker from "/src/assets/speacker.png"


// Icon
import { IoCheckmarkDone } from "react-icons/io5";





const CommentBox = () => {
    return (
        <>

            <section className='bg-bgChat bg-cover h-full'>
                <div className="container flex flex-col gap-5">
                    <div className=" flex flex-col gap-2">
                        <div className='mt-5 bg-white p-3 pb-5 w-[280px]'>
                            <div className=''>
                                <p>This is a message sent by the business. You can customise it to with a ton of variansts!</p>
                            </div>
                            <ul>
                                <li className='flex gap-1'><span className='font-bold'>Buttons</span> - None, One, Two, Three, List</li>
                                <li className='flex gap-1'><h2 className='font-bold'>Button</h2>- Call to action button, quick reply</li>
                                <li className='flex gap-1'><span className='font-bold'>CTA type</span>- Link, Contact Us</li>
                                <li className='flex gap-1'><span className='font-bold'>Message</span>- First message or repeat message</li>
                                <li className='flex gap-1'><span className='font-bold'>Images</span>- With image, without image</li>
                            </ul>
                        </div>
                        <div className='bg-white flex items-center gap-2 mt-2 justify-center text-blue-500 rounded-md py-2 w-[280px]'>
                            <img src={sent} alt="" />
                            <h4>13 October 2024</h4>
                        </div>
                        <div className='flex justify-end'>
                            <div className='flex justify-between bg-lime-300 w-[296px] py-2 mt-2 px-3 rounded-md'>
                                <div className='flex items-center gap-2'>
                                    <h3>Good morning, In Chennai </h3>
                                    <img src={imoj} alt="" />
                                </div>
                                <p className='text-[12px] flex items-end gap-1'>11:43 <span className='text-blue-500'><IoCheckmarkDone /></span></p>
                            </div>
                        </div>
                        <div className='bg-white flex items-end gap-2 mt-2 justify-between rounded-md py-2 w-[280px] px-2'>
                            <p>had breakfast? whats the special there</p>
                            <h4 className='text-slate-600 text-end'>11:40</h4>
                        </div>
                        <div className='bg-white gap-2 mt-2 rounded-md py-2 w-[280px] px-2 flex justify-between'>
                            <p>Rathna cafe?</p>
                            <h4 className='text-slate-600 '>11:40</h4>
                        </div>
                        <div className='flex justify-end'>
                            <div className='flex justify-between bg-lime-300 w-[296px] py-2 mt-2 px-3 rounded-md'>
                                <div className='flex gap-2 items-center'>
                                    <h3>Yeah as always </h3>
                                    <img src={emoj2} alt="" />
                                </div>
                                <p className='text-[12px] flex items-end gap-1'>11:43 <span className='text-blue-500'><IoCheckmarkDone /></span></p>
                            </div>
                        </div>
                        <div className='bg-white gap-2 mt-2 rounded-md py-2 w-[280px] px-2 flex items-end'>
                            <p>I'm going live today in WhatsApp for the first time</p>
                            <h4 className='text-slate-600 '>11:40</h4>
                        </div>
                        <div className='bg-slate-200 gap-2 mt-2 rounded-md py-2 w-[210px] px-2 flex justify-between items-end'>
                            <div className='flex gap-2'>
                                <img className='bg-white p-1 rounded-full' src={speaker} alt="" />
                                <div>
                                    <h1 className='font-bold'>Phone call</h1>
                                    <p className='text-slate-500'>3:45</p>
                                </div>
                            </div>
                            <h4 className='text-slate-600 '>11:40</h4>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default CommentBox;