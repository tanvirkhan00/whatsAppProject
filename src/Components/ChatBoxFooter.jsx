import React from 'react';

// Image
import update from "/src/assets/update.png"
import call from "/src/assets/Call.png"
import communicate from "/src/assets/communication.png"
import chat from "/src/assets/Message.png"
import setting from "/src/assets/Setting.png"

const ChatBoxFooter = () => {
    return (
        <>

            <footer>
                <div className="container">
                    <div className='flex items-center justify-between h-[80px] py-2'>
                        <div className='flex flex-col items-center text-slate-600'>
                            <img src={update} alt="" />
                            <h3 className='text-[14px]'>Updates</h3>
                        </div>
                        <div className='flex flex-col items-center text-slate-600'>
                            <img src={call} alt="" />
                            <h3 className='text-[14px]'>Calls</h3>
                        </div>
                        <div className='flex flex-col items-center text-slate-600'>
                            <img src={communicate} alt="" />
                            <h3 className='text-[14px]'>Communities</h3>
                        </div>
                        <div className='flex flex-col items-center text-slate-600 relative'>
                            <img src={chat} alt="" />
                            <h3 className='text-[14px] text-black'>Chats</h3>
                            <span className='bg-green-600 text-white absolute -top-2 -right-3 px-2 rounded-full '>1</span>
                        </div>
                        <div className='flex flex-col items-center text-slate-600'>
                            <img src={setting} alt="" />
                            <h3 className='text-[14px]'>Settings</h3>
                        </div>
                    </div>
                    <span className='w-[134px] h-[5px] flex mx-auto bg-black rounded-xl'></span>
                </div>
            </footer>
            
        </>
    );
};

export default ChatBoxFooter;