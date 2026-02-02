import {Menu, X} from "lucide-react";

const Navigation = ( {open, onOpen, onClose} ) => {
	return(
		<>
			<nav className="flex justify-between p-4 m-auto md:px-9 bg-white shadow-sm fixed top-0 left-0 right-0 z-1">
				<div><h1 className="font-donegal text-4xl tracking-wider lg:text-5xl">j<span className="text-customred">o</span>sh<span className="text-customred">D</span>an</h1></div>
				<div className="md:hidden">
					{!open ? (
							<button onClick={onOpen}>
								<Menu className="w-9 h-9"/>
							</button>
							) : (
							
							<button onClick={onClose}>
								<X className="w-9 h-9"/>
							</button>
							
					)}
				</div>
				<div className="flex items-center hidden md:block">
					<a href="" className="mx-3 lg:mx-6 font-inria font-bold text-lg px-4 py-1 bg-black text-white rounded-[4rem] lg:text-xl">Home</a>
					<a href="#about" className="mx-3 lg:mx-6 font-inria font-bold text-lg text-gray-800 lg:text-xl">About me</a>
					<a href="#skill" className="mx-3 lg:mx-6 font-inria font-bold text-lg text-gray-800 lg:text-xl">Skills</a>
					<a href="#projects" className="mx-3 lg:mx-6 font-inria font-bold text-lg text-gray-800 lg:text-xl">Projects</a>
					<a href="#services" className="mx-3 lg:mx-6 font-inria font-bold text-lg text-gray-800 lg:text-xl">Services</a>
					<a href="#contact" className="mx-3 lg:mx-6 font-inria font-bold text-lg text-gray-800 ">Contact me</a>
				</div>
			</nav>
		</>
	);
}
export default Navigation;