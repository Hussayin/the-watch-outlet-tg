import React, { useState } from "react";

import { useTheme } from "../context/ThemeContext";

//! icons
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { BsInstagram } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { TbPhoneCall } from "react-icons/tb";
import { motion } from "framer-motion";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdMiscellaneousServices } from "react-icons/md";

const Navbar = () => {
  const { toggleDarkMode, darkMode } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Navbar */}
      <div className=" z-[10000]  border-b-[2px] border-solid dark:border-black rounded-b-[15px] bg-[#0f192b] dark:bg-white  md:text-white dark:text-black flex justify-between py-[20px] items-center w-[100%] border-white px-[25px] md:px-[40px]  m-auto ">
        <div>
          <h1 className=" font-kanit text-[22px] ">The Watch Outlet</h1>
        </div>
        {/* laptop */}
        <div className=" md:flex hidden justify-center items-center gap-[65px] ">
          <div className="text-[20px] font-kanit flex justify-center items-center gap-[35px] ">
            <a className=" hover:text-red-500 duration-300 " href="#">
              Home
            </a>
            <a className=" hover:text-red-500 duration-300 " href="#">
              About
            </a>
            <a className=" hover:text-red-500 duration-300 " href="#">
              Servis
            </a>
            <a className=" hover:text-red-500 duration-300 " href="#">
              Contact
            </a>
          </div>
          <div className=" flex justify-center items-center gap-[15px] text-[15px]">
            <button
              onClick={toggleDarkMode}
              className=" p-[5px] border rounded-[50%] text-black dark:text-white bg-white dark:bg-black"
            >
              {darkMode ? (
                <BsFillMoonStarsFill className="text-[22px]" />
              ) : (
                <FaSun className="text-[23px]" />
              )}
            </button>
            <div className=" bg-red-600 dark:text-white py-[7px] px-[15px] rounded-lg md:hover:bg-red-800 cursor-pointer duration-300 flex justify-center items-center gap-[5px] ">
              <TbPhoneCall />
              <h1>Cantact</h1>
            </div>
          </div>
        </div>
        {/* Mobile */}
        <div className="md:hidden z-[100] flex justify-center items-center gap-[20px]">
          <button
            onClick={toggleDarkMode}
            className=" p-[5px] border rounded-[50%] text-black dark:text-white bg-white dark:bg-black"
          >
            {darkMode ? (
              <BsFillMoonStarsFill className="text-[22px]" />
            ) : (
              <FaSun className="text-[23px]" />
            )}
          </button>

          <div className="md:hidden z-[100] text-[30px] block">
            {!open && <HiMenuAlt3 onClick={() => setOpen(true)} />}
          </div>
        </div>
        {/*  */}
        {open && (
          <div className=" fixed z-[1000000000000] top-[0px] p-[25px]  bg-[#0f192b] dark:bg-white  left-0 w-[100%] h-[100%] overflow-scroll m-auto right-0  md:hidden ">
            <div className=" w-[100%] flex justify-center items-center ">
              {open && (
                <IoClose
                  className=" text-center text-[40px] "
                  onClick={() => setOpen(false)}
                />
              )}
            </div>
            {/* Social medi and servise */}
            <div className=" flex justify-center mt-[30px] items-center flex-col gap-[20px]">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  ease: "easeOut", // Easing funksiyasi
                  duration: 1, // Animatsiya davomiyligi
                  delay: 0.1,
                }}
                className=" w-[100%]"
              >
                <Link
                  // to="/servise"
                  className=" flex justify-center bg-white text-black dark:text-black dark:border-black font-bold items-center relative border-2 p-[7px] rounded-[15px] text-center font-nunito text-[20px] border-white w-[100%] "
                >
                  Servise
                  <MdMiscellaneousServices className=" absolute left-[15px] text-[30px]  " />
                </Link>
              </motion.div>

              <motion.a
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  ease: "easeOut", // Easing funksiyasi
                  duration: 1, // Animatsiya davomiyligi
                  delay: 0.2,
                }}
                href="https://www.instagram.com/the_watch_outlet_uz"
                className=" flex justify-center bg-white text-black dark:text-black dark:border-black font-bold items-center relative border-2 p-[7px] rounded-[15px] text-center font-nunito text-[20px] border-white w-[100%] "
              >
                Instagram
                <BsInstagram className=" absolute left-[15px] text-[30px]  " />
              </motion.a>

              <motion.a
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  ease: "easeOut", // Easing funksiyasi
                  duration: 1, // Animatsiya davomiyligi
                  delay: 0.3,
                }}
                href="https://www.instagram.com/bekhruz_watch"
                className=" flex justify-center bg-white text-black dark:text-black dark:border-black font-bold items-center relative border-2 p-[7px] rounded-[15px] text-center font-nunito text-[20px] border-white w-[100%] "
              >
                Instagram
                <BsInstagram className=" absolute left-[15px] text-[30px]  " />
              </motion.a>

              <motion.a
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  ease: "easeOut", // Easing funksiyasi
                  duration: 1, // Animatsiya davomiyligi
                  delay: 0.4,
                }}
                href="https://t.me/TheWatchOutlet"
                className=" flex justify-center bg-white text-black dark:text-black dark:border-black font-bold items-center relative border-2 p-[7px] rounded-[15px] text-center font-nunito text-[20px] border-white w-[100%] "
              >
                Telegram
                <BsTelegram className=" absolute left-[15px] text-[30px]  " />
              </motion.a>

              <motion.a
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  ease: "easeOut", // Easing funksiyasi
                  duration: 1, // Animatsiya davomiyligi
                  delay: 0.5,
                }}
                href="https://t.me/Bekhruz777"
                className=" flex justify-center bg-white text-black dark:text-black dark:border-black font-bold items-center relative border-2 p-[7px] rounded-[15px] text-center font-nunito text-[20px] border-white w-[100%] "
              >
                Telegram (admin)
                <BsTelegram className=" absolute left-[15px] text-[30px]  " />
              </motion.a>

              <motion.a
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  ease: "easeOut", // Easing funksiyasi
                  duration: 1, // Animatsiya davomiyligi
                  delay: 0.6,
                }}
                href="tel:+998977122206"
                className=" flex justify-center bg-white text-black dark:text-black dark:border-black font-bold items-center relative border-2 p-[7px] rounded-[15px] text-center font-nunito text-[20px] border-white w-[100%] "
              >
                +998 97 712 22 06
                <TbPhoneCall className=" absolute left-[15px] text-[30px]  " />
              </motion.a>

              {/* <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  ease: "easeOut", // Easing funksiyasi
                  duration: 1, // Animatsiya davomiyligi
                  delay: 0.1,
                }}
                className=" border-white dark:border-black border-2 p-[20px] rounded-[10px] "
              >
                <img
                  src="https://khusko1.netlify.app/mypic.jpg"
                  className="w-[350px] h-[330px] object-cover rounded-[10px] "
                  alt=""
                />
                <h1 className=" leading-5 opacity-75 mt-[10px] font-nunito">
                  Web Developer
                </h1>
                <h1 className=" leading-6 font-nunito text-[22px]">
                  Husan Bahramov
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  ease: "easeOut", // Easing funksiyasi
                  duration: 1, // Animatsiya davomiyligi
                  delay: 0.1,
                }}
                className=" border-white dark:border-black border-2 p-[20px] rounded-[10px] "
              >
                <img
                  src="https://khusko1.netlify.app/mypic.jpg"
                  className="w-[350px] h-[330px] object-cover rounded-[10px] "
                  alt=""
                />
                <h1 className=" leading-5 opacity-75 mt-[10px] font-nunito">
                  Web Developer
                </h1>
                <h1 className=" leading-6 font-nunito text-[22px]">
                  Husan Bahramov
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  ease: "easeOut", // Easing funksiyasi
                  duration: 1, // Animatsiya davomiyligi
                  delay: 0.1,
                }}
                className=" border-white dark:border-black border-2 p-[20px] rounded-[10px] "
              >
                <img
                  src="https://khusko1.netlify.app/mypic.jpg"
                  className="w-[350px] h-[330px] object-cover rounded-[10px] "
                  alt=""
                />
                <h1 className=" leading-5 opacity-75 mt-[10px] font-nunito">
                  Web Developer
                </h1>
                <h1 className=" leading-6 font-nunito text-[22px]">
                  Husan Bahramov
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  ease: "easeOut", // Easing funksiyasi
                  duration: 1, // Animatsiya davomiyligi
                  delay: 0.1,
                }}
                className=" border-white dark:border-black border-2 p-[20px] rounded-[10px] "
              >
                <img
                  src="https://khusko1.netlify.app/mypic.jpg"
                  className="w-[350px] h-[330px] object-cover rounded-[10px] "
                  alt=""
                />
                <h1 className=" leading-5 opacity-75 mt-[10px] font-nunito">
                  Web Developer
                </h1>
                <h1 className=" leading-6 font-nunito text-[22px]">
                  Husan Bahramov
                </h1>
              </motion.div> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
