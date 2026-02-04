import { motion, AnimatePresence } from "framer-motion";

const Hamburger = ( {open, onClose} ) => {

	return (
		<>
			<AnimatePresence>
				{open && (
					<motion.div
						className={`w-9/12 h-dvh bg-white fixed top-0 border-r border-r-3 border-r-gray-100`}
						initial={{ x: "-100%" }}
						animate={{ x: 0 }}
						exit={{ x: "-100%" }}
						transition={{ duration: 0.5, ease: "easeOut" }}
					>

						<h3 className="font-donegal text-4xl tracking-wider lg:text-5xl p-4">
							j<span className="text-customred">o</span>sh<span className="text-customred">D</span>an
						</h3>

						<motion.div
							className="w-full h-full flex flex-col justify-center items-center gap-y-6"
							initial="hidden"
							animate="show"
							exit="hidden"
							variants={{
								hidden: {},
								show: {
									transition: {
										staggerChildren: 0.12,
										delayChildren: 0.2
									}
								}
							}}
						>
							<motion.a variants={item} href="" onClick={onClose} className="w-fit font-inria font-bold text-xl bg-gray-100 py-3 px-6 rounded-full">Home</motion.a>
							<motion.a variants={item} href="#about" onClick={onClose} className="w-fit font-inria font-bold text-xl bg-gray-100 py-3 px-6 rounded-full">About me</motion.a>
							<motion.a variants={item} href="#skills" onClick={onClose} className="w-fit font-inria font-bold text-xl bg-gray-100 py-3 px-6 rounded-full">Skills</motion.a>
							<motion.a variants={item} href="#projects" onClick={onClose} className="w-fit font-inria font-bold text-xl bg-gray-100 py-3 px-6 rounded-full">Projects</motion.a>
							<motion.a variants={item} href="#services" onClick={onClose} className="w-fit font-inria font-bold text-xl bg-gray-100 py-3 px-6 rounded-full">Services</motion.a>
							<motion.a variants={item} href="#contact" onClick={onClose} className="w-fit font-inria font-bold text-xl bg-gray-100 py-3 px-6 rounded-full">Contact me</motion.a>
						</motion.div>

					</motion.div>
				)}
			</AnimatePresence>
		</>
	);

}

const item = {
	hidden: { opacity: 0, x: -20 },
	show: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.4, ease: "easeOut" }
	}
};

export default Hamburger;
