import { Linkedin, Github, Facebook, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {

  return(

    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col-reverse items-center m-auto p-4 mt-18 mb-7 md:flex-row md:justify-around md:w-11/12 md:mt-30 gap-y-4 gap-x-7"
      >
        
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="text-5xl w-fit font-inria font-bold italic md:text-5xl lg:text-6xl text-gray-800 mb-7">Hi there,</h2>
          <h2 className="text-3xl font-inria font-bold italic md:text-4xl lg:text-5xl  bg-lightred rounded-r-3xl w-fit p-2 pr-5 mb-5">I am Dangana Joshua</h2>
          <h2 className="text-xl font-inria font-bold italic md:text-2xl text-gray-800 bg-[#D9D9D9] rounded-r-3xl w-fit p-2 pr-5 mb-5">Full-Stack Web Developer</h2>
          <p className="text-base font-inria leading-11 italic md:text-2xl text-gray-800 mb-7 lg:text-3xl">I build fast modern and scalable web applications usings Laravel, Nodejs, and React.</p>
          <div className="flex mb-17 justify-center md:justify-start">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="font-inria text-white px-4 py-2  text-base md:text-lg rounded-lg bg-[#282828] mr-7"
            >
              View my work
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="font-inria text-white px-4  py-2 text-base md:text-lg rounded-lg bg-[#737373]"
            >
              Contact me
            </motion.a>
          </div>
          <div className="flex justify-center gap-10 md:gap-13 lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.2, y: -4 }}
                href="https://www.linkedin.com/in/joshua-dangana-a68a75312/"
              >
                <Linkedin/>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -4 }}
                href="https://github.com/JoshTino"
              >
                <Github/>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -4 }}
                href="https://www.facebook.com/mac.ace.50"
              >
                <Facebook/>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -4 }}
                href="https://"
              >
                <Instagram/>
              </motion.a>

                {/* X (Twitter) */}
                <motion.a
                  whileHover={{ scale: 1.2, y: -4 }}
                  href="https://x.com"
                  className="text-black hover:opacity-70"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.482 11.24H16.56l-5.29-6.923-6.06 6.923H1.9l7.73-8.833L1.5 2.25h7.426l4.713 6.231 4.605-6.231z" />
                  </svg>
                </motion.a>
            </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="lg:w-10/12 flex flex-col"
        >
          <div className="size-84 md:size-75 lg:size-130 self-end">
            <motion.img
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
              src="/images/hero-image.jpg"
              className=" w-full h-full rounded-full object-cover"
            />
          </div>
        </motion.div>

      </motion.div>
    </>
  );
}

export default Hero;
