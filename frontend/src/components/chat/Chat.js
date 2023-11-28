import ChatNav from "./subcomponent/ChatNav";
import ChatBox from "./subcomponent/ChatBox";
import ChatHeader from "./subcomponent/ChatHeader";
import Check from "../../images/chat/check.svg";
import Greenbar from "../../images/chat/greenbar.svg";
import Step2 from "../../images/chat/step2.svg";
import Whitebar from "../../images/chat/whitebar.svg";
import Step3 from "../../images/chat/step3.svg";
import Step4 from "../../images/chat/step4.svg";
import Step5 from "../../images/chat/step5.svg";
import Billie from "../../images/chat/billie.svg";
import Information from "../../images/chat/information.svg"; 


const Chat = () => {
    return (
        <div className="flex bg-[#F6F6F6] w-screen h-screen">
            <ChatNav />

            <div className='flex flex-col w-3/4 border border-black'>

                <div className=''>
                    <ChatHeader />
                </div>

                <div className='overflow-y-scroll'>
                    <div className='text-center pt-10 mb-20'>
                        <p className='text-4xl pb-6'>IT’s Billie your favourite health assistant</p>
                        <div className='flex justify-center gap-2 text-sm'>
                            <div className='flex flex-col items-start'>
                                <div className='flex items-center'>
                                    <img src={Check} alt="A check circle" className='w-10 h-10' />
                                    <img src={Greenbar} alt="A green bar"  className='w-28 h-3' />
                                </div>
                                <div>
                                    <p>Introduction</p>
                                </div>
                            </div>
                            <div className='flex flex-col items-start'>
                                <div className='flex items-center'>
                                    <img src={Step2} alt="Second step" className='w-10 h-10' />
                                    <img src={Whitebar} alt="A white bar"  className='w-28 h-3' />
                                </div>
                                <div>
                                    <p>User assesment</p>
                                </div>
                            </div>
                            <div className='flex flex-col items-start'>
                                <div className='flex items-center'>
                                    <img src={Step3} alt="Third step" className='w-10 h-10' />
                                    <img src={Whitebar} alt="A white bar"  className='w-28 h-3'/>
                                </div>
                                <div>
                                    <p>Symptom check</p>
                                </div>
                            </div>
                            <div className='flex flex-col items-start'>
                                <div className='flex items-center'>
                                    <img src={Step4} alt="Fourth step" className='w-10 h-10' />
                                    <img src={Whitebar} alt="A white bar" className='w-28 h-3' />
                                </div>
                                <div>
                                    <p>Diagnosis</p>
                                </div>
                            </div>
                            <div className='flex flex-col items-start'>
                                <div className='flex items-center'>
                                    <img src={Step5} alt="Fifth step" className='w-10 h-10' />
                                    <img src={Whitebar} alt="A white bar" className='w-28 h-3' />
                                </div>
                                <div>
                                    <p>Recommendation</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="messages">
                        <div className='w-[80%] items-start flex mx-auto gap-10 mb-10'>
                            
                            <img src={Billie} alt="Billie's logo" />
                            
                            <div className='flex flex-col'>
                                <p className='bg-[#C5D4D3] mb-8 py-4 px-6 rounded-3xl rounded-tl-none w-[100%] text-xl'>Hey i am Billie your favourite health assistant. I’m best at helping you with recieving your medical symptoms and Giving you a quick response on your possible health condition 🤩</p>
                                <p className='bg-[#C5D4D3] mb-2 py-4 px-6 rounded-3xl rounded-tl-none w-[100%] text-xl'>Whats is your age and sex?</p>
                                <div className='flex gap-1 text-[#1e92e6]'>
                                    <img src={Information} alt='information' />
                                    <p className='text-base'>Why do i need this information?</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="messages">
                        <div className='w-[80%] items-start flex mx-auto gap-10 mb-10'>
                            
                            <img src={Billie} alt="Billie's logo" />
                            
                            <div className='flex flex-col'>
                                <p className='bg-[#C5D4D3] mb-8 py-4 px-6 rounded-3xl rounded-tl-none w-[100%] text-xl'>Hey i am Billie your favourite health assistant. I’m best at helping you with recieving your medical symptoms and Giving you a quick response on your possible health condition 🤩</p>
                                <p className='bg-[#C5D4D3] mb-2 py-4 px-6 rounded-3xl rounded-tl-none w-[100%] text-xl'>Whats is your age and sex?</p>
                                <div className='flex gap-1 text-[#1e92e6]'>
                                    <img src={Information} alt='information' />
                                    <p className='text-base'>Why do i need this information?</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="messages">
                        <div className='w-[80%] items-start flex mx-auto gap-10 mb-10'>
                            
                            <img src={Billie} alt="Billie's logo" />
                            
                            <div className='flex flex-col'>
                                <p className='bg-[#C5D4D3] mb-8 py-4 px-6 rounded-3xl rounded-tl-none w-[100%] text-xl'>Hey i am Billie your favourite health assistant. I’m best at helping you with recieving your medical symptoms and Giving you a quick response on your possible health condition 🤩</p>
                                <p className='bg-[#C5D4D3] mb-2 py-4 px-6 rounded-3xl rounded-tl-none w-[100%] text-xl'>Whats is your age and sex?</p>
                                <div className='flex gap-1 text-[#1e92e6]'>
                                    <img src={Information} alt='information' />
                                    <p className='text-base'>Why do i need this information?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <ChatBox />
                </div>
            </div>
        </div>
    )
}


export default Chat;