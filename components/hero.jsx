import {Linkedin, Github, Facebook, Instagram} from "lucide-react";
const Hero = () => {

	return(

		<>
			<div className="flex flex-col-reverse items-center md:flex-row md:justify-around md:w-11/12 gap-y-4 gap-x-7 m-auto p-4 my-7 lg:my-10">
				
				<div className="">
					<h2 className="text-5xl w-fit font-inria font-bold italic md:text-5xl lg:text-6xl text-gray-800 mb-7">Hi there,</h2>
					<h2 className="text-3xl font-inria font-bold italic md:text-4xl lg:text-5xl  bg-lightred rounded-r-3xl w-fit p-2 pr-5 mb-5">I am Dangana Joshua</h2>
					<h2 className="text-xl font-inria font-bold italic md:text-2xl text-gray-800 bg-[#D9D9D9] rounded-r-3xl w-fit p-2 pr-5 mb-5">Full-Stack Web Developer</h2>
					<p className="text-lg font-inria leading-11 italic md:text-2xl text-gray-800 mb-7 lg:text-3xl">I build fast modern and scalable web applications usings Laravel, Nodejs, and React.</p>
					<div className="flex mb-17 justify-center md:justify-start">
						<a href="#projects" className="font-inria text-white px-5 py-3 text-xl md:text-lg py-2 rounded-2xl bg-[#282828] mr-7">View my work</a>
						<a href="#contact" className="font-inria text-white px-5 py-3 text-xl md:text-lg py-2 rounded-2xl bg-[#737373]">Contact me</a>
					</div>
					<div className="flex justify-center gap-13 lg:justify-start">
						  <a href="https://www.linkedin.com/in/joshua-dangana-a68a75312/">
						  	<Linkedin/>
						  </a>
						  <a href="https://github.com/JoshTino">
						  	<Github/>
						  </a>
						  <a href="https://www.facebook.com/mac.ace.50">
						  	<Facebook/>
						  </a>
						  <a href="https://">
						  	<Instagram/>
						  </a>
					      {/* X (Twitter) */}
					      <a
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
					      </a>
    				</div>

				</div>
				<div className="lg:w-10/12 flex flex-col">
					<div className="size-84 md:size-75 lg:size-130 self-end">
						<img src="/images/hero-image.jpg" className=" w-full h-full rounded-full object-cover"/>
					</div>
				</div>
				

			</div>
		</>
	);


}

export default Hero;