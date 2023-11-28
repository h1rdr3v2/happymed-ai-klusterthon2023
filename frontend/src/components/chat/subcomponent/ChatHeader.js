import Settings from "../../../images/chat/chatheader/settings.svg";
import Download from "../../../images/chat/chatheader/download.svg";
import Profile from "../../../images/chat/chatheader/profile.svg";

const ChatHeader = () => {
    return (
        <div className="bg-[#FFFFFF] z-50 w-[100%] py-4 px-8 flex items-center justify-end gap-2">
            <img src={Settings} alt="A settings icon" />
            <img src={Download} alt="A download icon" />
            <img src={Profile} alt="A profile icon" />
        </div>
    )
}

export default ChatHeader;