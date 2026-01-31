
const Hamburger = ( {open, onClose} ) => {

	return (
		<>
			<div className={`w-9/12 h-dvh bg-white fixed top-0 border-r border-r-3 border-r-gray-100 ${!open ? "hidden" : "block" }
				`}>

				<h3 className="font-donegal text-4xl tracking-wider lg:text-5xl p-4">j<span className="text-customred">o</span>sh<span className="text-customred">D</span>an</h3>
				<div className="w-full h-full flex flex-col justify-center items-center gap-y-6">
					<a href="" onClick={onClose} className="w-fit font-inria font-bold text-xl bg-gray-100 py-3 px-6 rounded-full">Home</a>
					<a href="#about" onClick={onClose} className="w-fit font-inria font-bold text-xl bg-gray-100 py-3 px-6 rounded-full">About me</a>
					<a href="#skills" onClick={onClose} className="w-fit font-inria font-bold text-xl bg-gray-100 py-3 px-6 rounded-full">Skills</a>
					<a href="#projects" onClick={onClose} className="w-fit font-inria font-bold text-xl bg-gray-100 py-3 px-6 rounded-full">Projects</a>
					<a href="#services" onClick={onClose} className="w-fit font-inria font-bold text-xl bg-gray-100 py-3 px-6 rounded-full">Services</a>
					<a href="#contact" onClick={onClose} className="w-fit font-inria font-bold text-xl bg-gray-100 py-3 px-6 rounded-full">Contact me</a>
				</div>
			</div>
		</>
	);

}
export default Hamburger;