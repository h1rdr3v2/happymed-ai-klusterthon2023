import Billie from "../../../images/chat/chatnav/billie.svg";
import Circle from "../../../images/chat/chatnav/circle.svg";
import Plus from "../../../images/chat/chatnav/plus.svg";



const ChatNav = () => {
    return (
        <div className="w-1/4 p-8 bg-[#00544F] h-screen flex flex-col justify-start items-start text-center">
            
            <div className="flex items-center mb-16">
                <img src={Billie} alt="AI chatbot logo" className="w-20 mb-4"/>
                <div className="text-[#FFFFFF] ml-2">
                    <p className="text-3xl">Billie</p>
                    <div className="flex">
                        <img src={Circle} alt="A green dot" />
                        <p className="text-base ml-2">online</p>
                    </div>
                </div>
            </div>
        
            <div className="bg-white py-4 w-64 mb-16 rounded-md flex justify-center items-center gap-4 text-[#00544F]">
                <img src={Plus} alt="A plus sign" />
                <p>New Checkup</p>
            </div>

            <div>
                <p className="text-[#196560] text-left">TODAY</p>            
                <div className="bg-[#196560] py-3 w-64 mb-16 rounded-md flex justify-center items-center gap-4 text-[#FFFFFF]">
                    <p>New Checkup</p>
                </div>
            </div>
            
        </div>
    )
}

export default ChatNav;