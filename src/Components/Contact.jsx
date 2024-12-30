//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../Variants";
//Link

const Contact = () => {
  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4
                className="text-xl uppercase text-accent font-semibold 
               mb-2 tracking-wide"
              >
                Get In Touch
              </h4>
              <h2 className="text-[45px] lg:text-6xl leading-none mb-12 lg:ml-5">
                Let&apos;s Work Together!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6
          pb-24 p-6 items-start"
          >
            <input
              type="email"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white
           focus:border-accent transition-all"
              placeholder="Your Email"
            />

            <input
              type="text"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white
           focus:border-accent transition-all mb-14"
              placeholder="Your Name"
            />

            <textarea
              name=""
              id=""
              placeholder="Your Message"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white
           focus:border-accent transition-all mb-20"
            ></textarea>
            <button className="btn btn-lg"> Send Message </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
