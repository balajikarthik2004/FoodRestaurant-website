import {IoLocationSharp} from 'react-icons/io5'
import { FaPhone } from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
const Contact = () => {
  return (
    <>
     <div data-aos='fade-down' data-aos-delay='200' className="text-white mt-20">
        <div className="container bg-gradient-to-b from-primary to-primaryDark rounded-t-3xl">
            {/* Contact section  */}
           
                <h1 className='py-10 text-4xl font-bold text-center'>Contact Us</h1>
                    {/* grid section  */}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 border-b-2 border-white pb-6">
                    <div className="text-center space-y-4">
                        <div className="flex justify-center">
                            <IoLocationSharp className='text-5xl'/>
                        </div>
                        <p>#92, 3rd Main, Virgo Nagar, Post,Seegehalli, Bengaluru, Karnataka 560049</p>
                    </div>
                    
                    <div className="text-center space-y-4">
                        <div className="flex justify-center">
                            <MdEmail className='text-5xl'/>
                        </div>
                        <p>info@goodfood.com hr@goodfood.com</p>
                    </div>

                    <div className="text-center space-y-4">
                        <div className="flex justify-center">
                            <FaPhone className='text-5xl'/>
                        </div>
                        <p>+91 9643224232 - Sales and Services</p><p>+91 9623423436 - Hiring Queries</p><p>+91 2345232445 - Whatsapp</p>
                    </div>
                </div>
                    <hr className=''/>
            <div className="flex justify-between pt-5 pb-3">
                <p>© 2022 TCJ. All rights reserved</p>
                <a href='#'>Privacy Policy</a>
                <a href='#'>Terms & Conditions</a>
            </div>
        </div>
        </div> 
    </>
  )
}

export default Contact
