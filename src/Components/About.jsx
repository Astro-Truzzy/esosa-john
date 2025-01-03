//countup
import CountUp from "react-countup";
//intersection observer
import { useInView } from "react-intersection-observer";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../Variants";
//link
import { Link } from "react-scroll";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div
          className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20
        lg:gap-y-0 h-screen"
        >
          {/* image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten"
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent"> About Me </h2>
            <h3 className="h3 mb-4">
              I&apos;m a Freelance Front-end Developer, exploring full-stack
              opportunities, project-driven.
            </h3>
            <p className="text-justify aboutme">
            I’m a passionate frontend developer specializing in building responsive, user-friendly interfaces with React, 
            JavaScript, and Tailwind CSS. My focus is on creating seamless and visually appealing web experiences that engage users
             and leave a lasting impression. Currently, I’m expanding my skills into fullstack 
             and smart contract development, exploring the exciting intersection 
             of web development and blockchain technology. With a keen eye for detail and a drive to continuously learn,
              I’ve worked on projects that prioritize clean design, efficient functionality, and a modern tech stack. I’m excited about pushing 
              the boundaries of what’s possible and turning ideas into impactful digital solutions. Let’s connect 
              and bring innovative projects to life!
            </p>
            <br />
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={5} duration={6} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  <p>
                    Months of <br />
                    Experience
                  </p>
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={10} duration={6} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  <p>
                    Projects <br />
                    Completed
                  </p>
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={9} duration={6} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  <p>
                    Satisfied <br />
                    Clients
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <Link to="contact"> <button className="btn btn-lg"> Contact Me </button> </Link>
              <a href="#" className="text-gradient btn-link">
                My Company
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
