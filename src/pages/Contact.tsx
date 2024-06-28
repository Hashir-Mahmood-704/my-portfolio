import { FaEnvelopeOpen } from "react-icons/fa"
import { BsLinkedin } from "react-icons/bs"
import SpecialButton from "../components/SpecialButton"
import { IoIosSend } from "react-icons/io"
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <div className="pb-[50px]  bg-body_color min-h-screen border border-body_color transition-all duration-[0.6s] ease-in-out">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-[1200px] mx-auto"
      >
        <h1 className="text-[45px] lg:text-[60px] font-bold text-heading_color text-center mt-[50px] transition-all duration-[0.6s] ease-in-out">
          Get In <span className="text-main_color">Touch</span>
        </h1>

        <div className="flex flex-col lg:flex-row items-start  gap-[40px] mt-[80px] px-[35px] lg:px-[50px] ">
          {/* left */}
          <div className="flex flex-col items-start gap-[20px]  w-full lg:flex-[1]">
            <h3 className="text-heading_color font-semibold text-[25px] transition-all duration-[0.6s] ease-in-out">
              Don't be Shy!
            </h3>
            <p className="text-text_color text-[14px] font-medium transition-all duration-[0.6s] ease-in-out">
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              visions.
            </p>

            <div className="flex gap-[20px]">
              <span className="text-main_color">
                <FaEnvelopeOpen size={40} />
              </span>
              <div className="">
                <p className="text-text_color text-[14px] transition-all duration-[0.6s] ease-in-out">
                  Mail me
                </p>
                <p className="text-heading_color font-medium text-[16px] transition-all duration-[0.6s] ease-in-out">
                  hashir704x@gmail.com
                </p>
              </div>
            </div>
            <a href="https://www.linkedin.com/in/hashir-mahmood/">
              <SpecialButton
                label="To my LinkedIn"
                icon={<BsLinkedin size={15} />}
              />
            </a>
          </div>

          {/* right */}

          <form className="flex flex-col gap-[30px]  w-full lg:flex-[2]">
            <div className="flex flex-col lg:flex-row items-center gap-[20px] text-text_color">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-container_color text-[14px] lg:text-[16px] p-[12px] lg:p-[15px] rounded-[10px] outline-none w-full transition-all duration-[0.6s] ease-in-out"
              />
              <input
                type="text"
                placeholder="Your Email"
                className="bg-container_color text-[14px] lg:text-[16px] p-[12px] lg:p-[15px] rounded-[10px] outline-none w-full transition-all duration-[0.6s] ease-in-out"
              />
              <input
                type="text"
                placeholder="Your Subject"
                className="bg-container_color text-[14px] lg:text-[16px] p-[12px] lg:p-[15px] rounded-[10px] outline-none w-full transition-all duration-[0.6s] ease-in-out"
              />
            </div>
            <textarea
              className="resize-none w-full bg-container_color h-[150px] rounded-[10px] outline-none text-text_color text-[14px] lg:text-[16px] p-[12px] lg:p-[15px] transition-all duration-[0.6s] ease-in-out"
              placeholder="Your Message"
            />
            <div className="w-fit">
              <SpecialButton
                label="Send Message"
                icon={<IoIosSend size={20} />}
              />
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  )
}

export default Contact
