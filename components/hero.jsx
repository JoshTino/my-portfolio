import { Linkedin, Github, Facebook, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse items-center md:flex-row md:justify-around md:w-11/12 gap-y-4 gap-x-7 m-auto p-4 my-7 lg:my-10">

      {/* Left text */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-5xl w-fit font-inria font-bold italic md:text-5xl lg:text-6xl text-gray-800 mb-7">
          Hi there,
        </h2>

        <h2 className="text-3xl font-inria font-bold italic md:text-4xl lg:text-5xl bg-lightred rounded-r-3xl w-fit p-2 pr-5 mb-5">
          I am Dangana Joshua
        </h2>

        <h2 className="text-xl font-inria font-bold italic md:text-2xl text-gray-800 bg-[#D9D9D9] rounded-r-3xl w-fit p-2 pr-5 mb-5">
          Full-Stack Web Developer
        </h2>

        <p className="text-base font-inria italic md:text-xl text-gray-800 mb-7 lg:text-2xl max-w-xl">
          I build fast modern and scalable web applications using Laravel, Nodejs, and React.
        </p>

        {/* Buttons */}
        <div className="flex mb-7 justify-center md:justify-start gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="font-inria text-white px-5 py-2 text-base md:text-lg rounded-lg bg-[#282828]"
          >
            View my work
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="font-inria text-white px-5 py-2 text-base md:text-lg rounded-lg bg-[#737373]"
          >
            Contact me
          </motion.a>
        </div>

        {/* Socials */}
        <div className="flex justify-center gap-6 lg:justify-start">
          {[ 
            { href: "https://www.linkedin.com/in/joshua-dangana-a68a75312/", icon: <Linkedin /> },
            { href: "https://github.com/JoshTino", icon: <Github /> },
            { href: "https://www.facebook.com/mac.ace.50", icon: <Facebook /> },
            { href: "#", icon: <Instagram /> },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -4 }}
              className="text-black"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Right image */}
      <motion.div
        initial={{ opacity: 0, x: 40, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="lg:w-10/12 flex flex-col"
      >
        <div className="size-72 md:size-80 lg:size-96 self-end overflow-hidden rounded-full">
          <img
            src="/images/hero-image.jpg"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            alt="Joshua"
          />
        </div>
      </motion.div>

    </div>
  );
};

export default Hero;
