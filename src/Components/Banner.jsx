import React from "react";
//image
import Image from '../assets/Avatar-removebg-preview.png'
//icons
import { FaDribbble, FaGithub, } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
//Typeanimation
import { TypeAnimation } from "react-type-animation";
//motion
import { motion } from "framer-motion"
//variants
import { fadeIn } from "../Variants";
//Link
import { Link} from "react-scroll";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center
    "
      id=""
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1 variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'}
            viewport={{once:false, amount: 0.7}} className="text-[55px] font-bold leading-[0.8] lg:text-[110px]">
              TRUST <span> WILLIAMS </span>
            </motion.h1>
            <motion.div variants={fadeIn('left', 0.4)} initial='hidden' whileInView={'show'}
            viewport={{once:false, amount: 0.7}}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold
   uppercase leading-[1]"
            >
              <span className="text-white mt-4"> I am </span>
              <TypeAnimation
                sequence={[
                  "a Developer",
                  2000,
                  "a Designer",
                  2000,
                  "an Innovator",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p variants={fadeIn('up', 0.5)} initial='hidden' whileInView={'show'}
            viewport={{once:false, amount: 0.7}} className="mb-8 max-w-lg mx-auto lg:mx-0">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
              a ipsam aut hic voluptates, quia animi beatae tempora voluptatibus
              soluta eos labore aspernatur, ipsum iusto dolores sequi quae
              maxime? Amet, dignissimos natus ea enim corporis eligendi quos
              nostrum esse ducimus eos eum voluptates voluptas voluptatum
              repudiandae. Aut, animi. Modi, natus?
            </motion.p>
            <motion.div variants={fadeIn('up', 0.6)} initial='hidden' whileInView={'show'}
            viewport={{once:false, amount: 0.7}} className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <Link to="contact"
              smooth={true}
              spy={true}
              > <button className="btn btn-lg"> Contact Me </button> </Link>
               <Link 
               smooth={true}
               spy={true}
               to="work"> <a href="" className="text-gradient btn-link">
                My Portfolio
              </a> </Link>
            </motion.div>
            {/* Socials */}
            <motion.div variants={fadeIn('up', 0.7)} initial='hidden' whileInView={'show'}
            viewport={{once:false, amount: 0.7}} className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <FaDribbble />
              </a>
              <a href="#">
                <CiLinkedin/>
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div variants={fadeIn('down', 0.5)} initial='hidden' whileInView={'show'}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]
          "
          >
            <img src={Image} alt="" className="ava lg:ml-[150px]"/>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
