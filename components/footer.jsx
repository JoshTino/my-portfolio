
const Footer = () => {
	return(
		<>
			<div className="flex flex-col gap-y-5 items-center p-4">
				<h2 className="font-inria font-bold tracking-widest leading-10 text-center text-3xl">Let's W<span className="text-customred">o</span>rk<br/><span className="text-customred">To</span>gether</h2>
				<div className="flex justify-between gap-x-4 items-center md:w-11/12">
					<h4 className="font-donegal tracking-widest font-light text-2xl">joshDan</h4>
					<div className="flex justify-between md:w-4/12">
						<a href="" className="font-inria font-bold text-xs mr-1">Home</a>
						<a href="" className="font-inria font-bold text-xs mr-1">About Me</a>
						<a href="" className="font-inria font-bold text-xs mr-1">Skills</a>
						<a href="" className="font-inria font-bold text-xs mr-1">Projects</a>
						<a href="" className="font-inria font-bold text-xs mr-1">Services</a>
					</div>
				</div>
				<span className="font-inria tracking-wider">2025 Dangana Joshua. All rights reserved</span>
			</div>
		</>
	);
}
export default Footer;