import {CodeXml, DatabaseZap, Wallpaper} from "lucide-react";
const  Services = () => {

	return(
		<>
			<div className="flex flex-col items-center m-auto mb-5 p-4" id="services">
				<h2 className="font-inria font-bold text-3xl text-gray-800 my-2 border-b-3 border-gray-400 p-2 w-70 text-center">Services</h2>
				<p className="md:w-9/12 font-inria leading-10 text-gray-800 font-light text-base">Below are range of services I can render</p>
				<div className="grid grid-cols-1 gap-y-3 md:w-9/12 md:grid-cols-2 md:gap-x-4 lg:grid-cols-3">
					<div className="flex flex-col items-center border gap-y-4 p-5 rounded-lg border-gray-200 text-center">
						<div className="bg-gray-900 p-5 md:p-8 rounded-full"><CodeXml className="text-white "/></div>
						<h3 className="font-inria text-gray-800 text-lg font-bold">Backend Developement</h3>
						<p className="font-inria text-gray-800 text-sm leading-7 font-light">I develop secure backend systems, including REST APIs, authentication, role management, and server-side logic.</p>
					</div>
					<div className="flex flex-col items-center border gap-y-4 p-5 rounded-lg border-gray-200 text-center">
						<div className="bg-gray-900 p-5 md:p-8 rounded-full"><DatabaseZap className="text-white "/></div>
						<h3 className="font-inria text-gray-800 text-lg font-bold">Database Architecture</h3>
						<p className="font-inria text-gray-800 text-sm leading-7 font-light">I design and optimize MySQL databases, create efficient schemas, handle migrations, and manage backups.</p>
					</div>
					<div className="flex flex-col items-center border gap-y-4 p-5 rounded-lg border-gray-200 text-center">
						<div className="bg-gray-900 p-5 md:p-8 rounded-full"><Wallpaper className="text-white "/></div>
						<h3 className="font-inria text-gray-800 text-lg font-bold">UI/UX Design</h3>
						<p className="font-inria text-gray-800 text-sm leading-7 font-light">I design intuitive interfaces, wireframes, and prototypes in Figma for both web and mobile applications.</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default Services;