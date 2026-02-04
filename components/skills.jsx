import { motion } from "framer-motion";
import {ListChecks, Handshake, UsersRound} from "lucide-react";

const Skills = () => {

	return(
		<>
			<motion.div
				className="flex flex-col m-auto p-4 items-center"
				id="skills"
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ }}
				transition={{ duration: 1.1, ease: "easeOut" }}
			>
				<h2 className="font-inria font-bold text-3xl text-gray-800 my-2 border-b-3 border-gray-400 p-2 w-70 text-center">Technical Skills</h2>
				<p className="font-inria leading-10 text-gray-800 text-base md:text-lg font-light text-center">
					Skills acquired and the degree of effectiveness with which I can apply them
				</p>

				<div className="w-full gap-y-7 md:gap-x-4 justify-center py-3 grid grid-cols-1 md:grid-cols-2 md:gap-y-4 md:w-9/12">

					<div className="">
						<div className="flex justify-between px-1 my-1 md:my-2">
							<span className="font-inria text-xs text-gray-800 font-bold">HTML</span><span className="font-inria font-bold text-xs text-gray-800">95%</span>
						</div>
						<div className="bg-[#D9D9D9] rounded-full"><div className="bg-blue-600 w-[95%] p-[0.2rem] rounded-full"></div></div>
					</div>

					<div className="">
						<div className="flex justify-between px-1 my-1 md:my-2">
							<span className="font-inria text-xs text-gray-800 font-bold">CSS</span><span className="font-inria font-bold text-xs text-gray-800">95%</span>
						</div>
						<div className="bg-[#D9D9D9] rounded-full"><div className="bg-blue-600 w-[95%] p-[0.2rem] rounded-full"></div></div>
					</div>

					<div className="">
						<div className="flex justify-between px-1 my-1 md:my-2">
							<span className="font-inria text-xs text-gray-800 font-bold">TAILWINDCSS</span><span className="font-inria font-bold text-xs text-gray-800">45%</span>
						</div>
						<div className="bg-[#D9D9D9] rounded-full"><div className="bg-blue-600 w-[45%] p-[0.2rem] rounded-full"></div></div>
					</div>

					<div className="">
						<div className="flex justify-between px-1 my-1 md:my-2">
							<span className="font-inria text-xs text-gray-800 font-bold">JAVASCRIPT</span><span className="font-inria font-bold text-xs text-gray-800">95%</span>
						</div>
						<div className="bg-[#D9D9D9] rounded-full"><div className="bg-blue-600 w-[95%] p-[0.2rem] rounded-full"></div></div>
					</div>

					<div className="">
						<div className="flex justify-between px-1 my-1 md:my-2">
							<span className="font-inria text-xs text-gray-800 font-bold">NODE JS</span><span className="font-inria font-bold text-xs text-gray-800">75%</span>
						</div>
						<div className="bg-[#D9D9D9] rounded-full"><div className="bg-blue-600 w-[75%] p-[0.2rem] rounded-full"></div></div>
					</div>

					<div className="">
						<div className="flex justify-between px-1 my-1 md:my-2">
							<span className="font-inria text-xs text-gray-800 font-bold">EXPRESS JS</span><span className="font-inria font-bold text-xs text-gray-800">70%</span>
						</div>
						<div className="bg-[#D9D9D9] rounded-full"><div className="bg-blue-600 w-[70%] p-[0.2rem] rounded-full"></div></div>
					</div>

					<div className="">
						<div className="flex justify-between px-1 my-1 md:my-2">
							<span className="font-inria text-xs text-gray-800 font-bold">REACT JS</span><span className="font-inria font-bold text-xs text-gray-800">60%</span>
						</div>
						<div className="bg-[#D9D9D9] rounded-full"><div className="bg-blue-600 w-[60%] p-[0.2rem] rounded-full"></div></div>
					</div>

					<div className="">
						<div className="flex justify-between px-1 my-1 md:my-2">
							<span className="font-inria text-xs text-gray-800 font-bold">PHP</span><span className="font-inria font-bold text-xs text-gray-800">85%</span>
						</div>
						<div className="bg-[#D9D9D9] rounded-full"><div className="bg-blue-600 w-[85%] p-[0.2rem] rounded-full"></div></div>
					</div>

					<div className="">
						<div className="flex justify-between px-1 my-1 md:my-2">
							<span className="font-inria text-xs text-gray-800 font-bold">LARAVEL</span><span className="font-inria font-bold text-xs text-gray-800">70%</span>
						</div>
						<div className="bg-[#D9D9D9] rounded-full"><div className="bg-blue-600 w-[70%] p-[0.2rem] rounded-full"></div></div>
					</div>
				</div>

				<div className="flex justify-between md:justify-around py-5 w-full">

					<motion.div
						className="flex items-center gap-y-3 flex-col"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						<div className="bg-gray-900 p-5 md:p-8 rounded-full"><ListChecks className="text-white"/></div>
						<span className="font-inria font-bold text-2xl text-gray-800">15</span>
						<span className="font-inria text-sm text-gray-800 font-light">Project</span>
					</motion.div>

					<motion.div
						className="flex items-center gap-y-3 flex-col"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ }}
						transition={{ duration: 0.8, delay: 0.4 }}
					>
						<div className="bg-gray-900 p-5 md:p-8 rounded-full"><Handshake className="text-white"/></div>
						<span className="font-inria font-bold text-2xl text-gray-800">8</span>
						<span className="font-inria text-sm text-gray-800 font-light">Happy Clients</span>
					</motion.div>

					<motion.div
						className="flex items-center gap-y-3 flex-col"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ }}
						transition={{ duration: 0.8, delay: 0.6 }}
					>
						<div className="bg-gray-900 p-5 md:p-8 rounded-full"><UsersRound className="text-white"/></div>
						<span className="font-inria font-bold text-2xl text-gray-800">250+</span>
						<span className="font-inria text-sm text-gray-800 font-light">Developers <br/>mentored</span>
					</motion.div>

				</div>

			</motion.div>
		</>
	);

}
export default Skills;
