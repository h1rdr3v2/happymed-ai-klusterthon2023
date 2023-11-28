import HappyMedAI from "../../../images/footer/happymedAI.svg";
import Linkedin from "../../../images/footer/linkedin.svg";
import Twitter from "../../../images/footer/twitter.svg";
import Facebook from "../../../images/footer/facebook.svg";
import Instagram from "../../../images/footer/instagram.svg";

const Footer = () => {
    return (
        <div className="bg-[#00544F] max-w-full pb-10">
            <div className="flex pt-20 ml-20 text-left">
                <div className="pb-10 w-[30%]">
                    <img 
                        src={HappyMedAI}
                        alt="HappyMedAI's logo"
                        className="mb-3"
                    />
                    <div className="text-white mb-2 text-xl">
                        <p>HappyMed AI gives you the blocks and components you need to create a truly professional website.</p>
                    </div>
                </div>


                <div className="pb-10 w-[20%]">
                    <h6 className="text-[#AACD71] mb-8 text-sm">Support Us</h6>
                    <div className="text-white text-base">
                        <p className="mb-2">About Us</p>
                        <p>Contact Us</p>
                    </div>
                </div>

                <div className="pb-10 w-[20%]">
                    <h6 className="text-[#AACD71] mb-8 text-sm">Information</h6>
                    <div className="text-white text-base">
                        <p className="mb-2">Privacy policy</p>
                        <p className="mb-2">Terms & Condition</p>
                        <p>News/Blog</p>
                    </div>
                </div>

                <div className="pb-10 w-[20%]">
                    <h6 className="text-[#AACD71] mb-8 text-sm">Follow US</h6>
                    <div className="flex gap-x-4">
                        <img 
                            src={Linkedin}
                            alt="Linkedin logo"
                        />
                        <img 
                            src={Twitter}
                            alt="Twitter logo"
                        />
                        <img 
                            src={Facebook}
                            alt="Instagram logo"
                        />
                        <img 
                            src={Instagram}
                            alt="Facebook logo"
                        />
                    </div>
                    <div className="text-white text-base">
                        <p>Support@happymedai</p>
                    </div>
                </div>
            </div>

            <div className="w-[90%] mx-auto mb-4">
                <hr />
            </div>

            <div className="text-[#FFFFFF] text-center">
                <p>© Copyright 2022, All Rights Reserved by ClarityUI</p>
            </div>
        </div>  
    )
}

export default Footer;