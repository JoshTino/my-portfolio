import { motion } from "framer-motion";

const Contact = () => {
	return(
		<>
			<motion.div
				className="flex flex-col mb-5 items-center p-4 md:m-auto"
				id="contact"
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ }}
				transition={{ duration: 1.1, ease: "easeOut" }}
			>
				<h2 className="font-inria font-bold text-3xl text-gray-800 my-8 border-b-3 border-gray-400 p-2 w-70 text-center">Contact</h2>

				<div className="flex flex-col w-full md:w-9/12 md:flex-row md:justify-around">

					<motion.div
						className="w-full mb-2 md:w-4/12"
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ }}
						transition={{ duration: 0.9, ease: "easeOut" }}
					>
						<div>
							<h4 className="font-inria font-bold text-2xl mb-2">Location:</h4>
							<span className="font-inria font-light mb-5 block">Off Kufang, Jos  525022</span>
						</div>
						<div>
							<h4 className="font-inria font-bold text-2xl mb-2">Email:</h4>
							<span className="font-inria font-light mb-5 block">joshuatinoo33@gmail.com</span>
						</div>
						<div>
							<h4 className="font-inria font-bold text-2xl mb-2">Call:</h4>
							<span className="font-inria font-light mb-5 block">+234 80 6924 9696</span>
						</div>
					</motion.div>

					<motion.div
						className="grid grid-cols-1 gap-3 md:w-8/12 md:grid-cols-2"
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ }}
						transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
					>
						<input type="text" placeholder="Your Name"  className="bg-gray-100 p-4 rounded-lg text-gray-900"/>
						<input type="text" placeholder="Your Email"  className="bg-gray-100 p-4 rounded-lg text-gray-900"/>
						<input type="text" placeholder="Your Subject" className="bg-gray-100 p-4 rounded-lg text-gray-900 md:col-span-2"/>
						<textarea placeholder="Your Message" className="bg-gray-100 p-4 rounded-lg h-50 text-gray-900 md:col-span-2"></textarea>
						<button className="w-fit bg-black justify-self-center font-inria p-4 text-white self-center rounded-lg">
							Send Message
						</button>
					</motion.div>

				</div>				
			</motion.div>
		</>
	);
}

export default Contact;
