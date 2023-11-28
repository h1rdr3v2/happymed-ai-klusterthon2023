import HomeNav from "./subcomponents/HomeNav"
import Footer from "../shared/footer/Footer";
import Bullet from "../../images/home/bullet.svg";
import HappyUser from "../../images/home/happyuser.svg";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <HomeNav />
            <div className='bg-[#F6F6F6] flex text-[rgb(255,255,255)] m-auto pt-56 pb-12'>
                <div className='text-[#00544F] w-[40%] mx-auto'>
                    <p className='text-7xl mb-10'>More than just a Symptom Checker</p>
                    <p className='text-2xl mb-10'>HappyMed AI  Is more than a chatbot that gives you a diagnosis its a decision support solution navigates users from problem to solution, all through a simple conversation to:</p>
                    <div className="text-black mb-14">
                        <div className='flex mb-6'>
                            <img src={Bullet} alt='Bulleted Point' />
                            <p className='ml-5'>Introduction</p>
                        </div>
                        <div className='flex mb-6'>
                            <img src={Bullet} alt='Bulleted Point' />
                            <p className='ml-5'>User assessment</p>
                        </div>
                        <div className='flex mb-6'>
                            <img src={Bullet} alt='Bulleted Point' />
                            <p className='ml-5'>Diagnosis</p>
                        </div>
                        <div className='flex mb-6'>
                            <img src={Bullet} alt='Bulleted Point' />
                            <p className='ml-5'>Medical recomendation</p>
                        </div>
                        <div className='flex mb-6'>
                            <img src={Bullet} alt='Bulleted Point' />
                            <p className='ml-5'>More information</p>
                        </div> 
                    </div>
                    <Link 
                        to='/chat'
                    >
                        <button className="bg-[#027E6D] px-2 py-4 text-[#FFFFFF] text-2xl font-medium rounded-full w-80">Ask HappyMedAI</button>
                    </Link>
                </div>
                <div className='w-[40%] mx-auto'>
                    <img src={HappyUser} alt="Happy user" className='rounded-md' />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;