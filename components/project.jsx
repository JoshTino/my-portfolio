import { Github, Globe } from "lucide-react";
import { motion } from "framer-motion";

const Project = () => {

	return(
		<>
			<motion.div
        className="flex flex-col items-center m-auto mb-5 p-4"
        id="projects"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
				<h2 className="font-inria font-bold text-3xl text-gray-800 my-2 border-b-3 border-gray-400 p-2 w-70 text-center">Projects I've Done</h2>
				<p className="font-inria leading-10 text-gray-800 text-base md:text-lg font-light">Here is a glimpse of some exciting projects I’ve done over the years.</p>

				<div className="flex flex-col justify-between gap-y-15 my-3 md:w-9/12 md:flex-row md:justify-around md:gap-x-3">
					<motion.div
            className="flex flex-col gap-y-3 w-12/12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.35 }}
          >
						<h3 className="font-inria text-gray-800 text-lg font-bold">#1 Waste Mgmt & Reporting System</h3>
						<div className="flex gap-x-3">
							<img src="/images/Screenshot_20260720_033403_Chrome.jpg" className="w-2/7"/>
							<img src="/images/Screenshot_20260720_033630_Chrome.jpg" className="w-2/7"/>
							<img src="/images/Screenshot_20260720_033613_Chrome.jpg" className="w-2/7"/>
						</div>
						<p className="font-inria text-gray-800 text-base leading-8 font-light h-28 overflow-auto"><span className="font-bold">TroWay</span> is a geo-location based waste reporting and management platform that enables citizens to report waste-related issues while allowing administrators to monitor reports, assign cleanup tasks, and visualize waste locations on an interactive map.

Built with the MERN stack, TroWay aims to improve environmental sanitation through efficient reporting, tracking, and management of waste incidents</p>
						<div className="flex gap-x-4"><span className="font-inria text-xs bg-gray-200 py-1 px-2 font-bold rounded-lg">Express.js</span> <span className="font-inria text-xs bg-gray-200 py-1 px-2 font-bold rounded-lg">Leaflet</span> <span className="font-inria text-xs bg-gray-200 py-1 px-2 font-bold rounded-lg">Node.js</span> <span className="font-inria text-xs bg-gray-200 py-1 px-2 font-bold rounded-lg">Mongo</span> <span className="font-inria text-xs bg-gray-200 py-1 px-2 font-bold rounded-lg">React.js</span></div>
						<a href="https://github.com/JoshTino/troway" className="w-fit bg-black text-white font-inria rounded-lg py-2 pl-2 pr-5"><Github className="inline" /> Github</a><a href="https://troway1.onrender.com/login" className="w-fit bg-green-600 text-white font-inria rounded-lg py-2 pl-2 pr-5"><Globe className="inline" /> Live website</a>
					</motion.div>

					<motion.div
            className="flex flex-col gap-y-3 w-12/12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          >
						<h3 className="font-inria text-gray-800 text-lg font-bold">#2 Online Marketplace Web-app</h3>
						<div className="flex gap-x-3">
							<img src="/images/Screenshot_20231215-055232.png"  className="w-2/7"/>
							<img src="/images/Screenshot_20231215-055319.png"  className="w-2/7"/>
							<img src="/images/Screenshot_20231215-055254.png"  className="w-2/7"/>
						</div>
						<p className="font-inria text-gray-800 text-base leading-8 font-light">Built Maigida, a functional online marketplace with secure authentication, product management, and a responsive UI using PHP (MVC) and JavaScript.</p>
						<div className="flex gap-x-4"><span className="font-inria text-xs bg-gray-200 py-1 px-2 font-bold rounded-lg">PHP(MVC)</span> <span className="font-inria text-xs bg-gray-200 py-1 px-2 font-bold rounded-lg">JavaScript</span> <span className="font-inria text-xs bg-gray-200 py-1 px-2 font-bold rounded-lg">MySql</span> <span className="font-inria text-xs bg-gray-200 py-1 px-2 font-bold rounded-lg">Apache</span></div>
						<a href="" className="w-fit bg-black text-white font-inria rounded-lg py-2 pl-2 pr-5"><Github className="inline" /> Github</a>
					</motion.div>

					<motion.div
            className="flex flex-col gap-y-3 w-12/12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.35 }}
          >
						<h3 className="font-inria text-gray-800 text-lg font-bold">#3 News Web-app</h3>
						<div className="flex gap-x-3">
							<img src="/images/Screenshot_20250319-092332.png" className="w-2/7"/>
							<img src="/images/Screenshot_20250319-162321.png" className="w-2/7"/>
							<img src="/images/Screenshot_20250319-092012.png" className="w-2/7"/>
						</div>
						<p className="font-inria text-gray-800 text-base leading-8 font-light">Created TarabaExpress, a PHP (MVC) news platform with real-time updates, SEO optimization, and a responsive, easy-to-manage admin panel.</p>
						<div className="flex gap-x-4"><span className="font-inria text-xs bg-gray-200 py-1 px-2 font-bold rounded-lg">PHP(MVC)</span> <span className="font-inria text-xs bg-gray-200 py-1 px-2 font-bold rounded-lg">JavaScript</span> <span className="font-inria text-xs bg-gray-200 py-1 px-2 font-bold rounded-lg">MySql</span> <span className="font-inria text-xs bg-gray-200 py-1 px-2 font-bold rounded-lg">Apache</span></div>
						<a href="https://github.com/JoshTino/tarabaexpress" className="w-fit bg-black text-white font-inria rounded-lg py-2 pl-2 pr-5"><Github className="inline" /> Github</a>
					</motion.div>

				</div>
			</motion.div>
		</>
	);

}
export default Project;
