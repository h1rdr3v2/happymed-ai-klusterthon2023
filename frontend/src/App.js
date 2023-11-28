import Nav from './components/shared/nav/Nav';
import Hundred from "./images/landingpage/100percent.svg";
import TwentyFour from "./images/landingpage/24hrs.svg";
import User from "./images/landingpage/user.svg";
import Chatbot from "./images/landingpage/Chatbot.svg";
import Chat1 from "./images/landingpage/chat1.svg";
import Chat2 from "./images/landingpage/chat2.svg";
import Chat3 from "./images/landingpage/chat3.svg";
import One from "./images/landingpage/1.svg";
import Two from "./images/landingpage/2.svg";
import Three from "./images/landingpage/3.svg";
import Video from "./images/landingpage/video.svg";
import GreenBar from "./images/landingpage/GreenBar.svg";
import GreyBar from "./images/landingpage/GreyBar.svg";
import Chidinma from "./images/landingpage/Chidinma.svg";
import SliderArrow from "./images/landingpage/SliderArrow.svg";
import HappyUser from "./images/landingpage/happyuser.svg";
import NinetyPercentAcc from "./images/landingpage/90percentaccuracy.svg";
import HundredPercentData from "./images/landingpage/100percentdata.svg";
import Footer from './components/shared/footer/Footer';

function App() {
  return (
    <div className=''>
      <Nav />
      <div className='bg-[#007D6D] flex text-[#FFFFFF] m-auto'>
        <div className='text-[#FFFFFF] pt-56 w-[40%] mx-auto'>
          <p className='text-7xl mb-10'>Elevate Your Health Awarness with HappyMed Ai</p>
          <p className='text-2xl mb-10'>Ask a question, and recieve quick  Our AI-powered chatbot is here to guide you through understand your symptoms, provide valuable insights, and help you make informed decisions about your health </p>
          <button className="bg-[#AEDB67] px-2 py-1 text-[#007D6D] text-2xl font-medium rounded-2xl w-80">Get Started</button>
        </div>
        <div className='w-[40%] mx-auto'>
          <img src={Hundred} alt="Hundred percent" className='-translate-x-[9rem] translate-y-[27rem]' />
          <img src={User} alt="Female user" className='rounded-md rounded-tl-[100px]' />
          <img src={TwentyFour} alt="Twenty-four hours" className='translate-x-[21rem] -translate-y-[40rem]' />
        </div>
      </div>

      <div className='bg-[#FFFFFF] flex m-auto py-20'>
        <div className='text-[#111111] w-[40%] mx-auto'>
          <p className='text-5xl mb-10'>How HappyMed AI works</p>
          <p className='text-2xl mb-10'>Take a short (3 min) symptom assessment. The information you give is safe and won’t be shared.</p>
          <div className="px-2 py-1 text-3xl font-medium rounded-2xl w-80">
            <div className='flex mb-6'>
              <img src={One} alt='Number one' />
              <p className='text-[#027E6D] ml-5'>Introduction</p>
            </div>
            <div className='flex mb-6'>
              <img src={Two} alt='Number two' />
              <p className='text-[#ABB3B2] ml-5'>Interaction</p>
            </div>
            <div className='flex'>
              <img src={Three} alt='Number three' />
              <p className='text-[#ABB3B2] ml-5'>Quick response</p>
            </div>
          </div>
        </div>
        <div className='w-[40%] mx-auto'>
          <img src={Chatbot} alt="Chatbot Screenshot" className='rounded-l-3xl' />
          <img src={Chat1} alt="First Chat" className='translate-x-[18rem] -translate-y-[31.5rem] absolute' />
          <img src={Chat2} alt="Second Chat" className='translate-x-[18rem] -translate-y-[26.5rem] absolute' />
          <img src={Chat3} alt="Third Chat" className='translate-x-[18rem] -translate-y-[21.5rem] absolute' />
        </div>
      </div>

      <div className='bg-[#FFFFFF] flex m-auto py-20'>
        <img src={Video}  alt='Video' className='mx-auto' />
      </div>

      <div className='bg-[#FFFFFF] flex m-auto py-20'>
        <div className='text-[#111111] w-[40%] mx-auto border border-black'>
          <p className='text-5xl mb-10'>Built by a team of experts</p>
          <p className='text-2xl mb-10'>We discard most opportunities to focus on what matters. Not everything should be AB tested, so we balance common sense and data to make the right decisions. We don’t fool ourselves that we’re perfect and consider critical feedback seriously.</p>
          <div className="px-2 py-1 text-3xl font-medium rounded-2xl w-80">
            <div className='flex mb-6'>
              <img src={GreenBar} alt='A green slider bar' />
              <img src={GreyBar} alt='A grey slider bar' />
              <img src={GreyBar} alt='A grey slider bar' />
            </div>  
          </div>
        </div>
        <div className='w-[40%] mx-auto'>
          <img src={Chidinma} alt="Chidinma: product designer" className='rounded-md bg-[#007D6D]' />
          <img src={SliderArrow} alt="Slider Arrow" className='translate-x-[18rem] -translate-y-[47.5rem] absolute' />
        </div>
      </div>

      <div className='bg-[#FFFFFF] flex m-auto py-20'>
        <div className='w-[40%] mx-auto border border-black'>
          <img src={HappyUser} alt='A happy user' />
        </div>
        <div className='bg-[#D9F8F3] text-[#111111] w-[40%] m-auto border border-black'>
          <p className='text-5xl mb-10'>Quick and instant Response</p>
          <p className='text-2xl mb-10'>HappyMed Ai is dedicated in safeguarding your privacy and safety. Your health data is anonymised and encrypted at every stage of your case.</p>
          <div className="px-2 py-1 text-3xl font-medium rounded-2xl w-80">
            <div className='flex mb-6'>
              <img src={NinetyPercentAcc} alt='Ninety percent accuracy' className='' />
              <img src={HundredPercentData} alt='Hundred percent data protection' className='ml-10' />
            </div>  
          </div>
        </div>
      </div>

      <Footer />

    </div>
  );
}

export default App;
