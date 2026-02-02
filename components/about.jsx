
const About = () => {

	return(
		<>
			<div className="flex flex-col m-auto mb-5 p-4 items-center" id="about">
	
				<h2 className="font-inria font-bold text-3xl text-gray-800 my-2 border-b-3 w-70 text-center p-2 border-gray-400">About</h2>
				<p className="text-center text-gray-800 font-inria leading-10 text-base font-light md:w-180 md:my-4 lg:w-230">
					I'm a passionate software engineer with a knack for problem-solving innovation. 
					With a Bachelor's degree in Computer Science, I have been crafting clean and efficient code for the past 8 years. 
					My expertise spans across web and mobile development, and I thrive in collaborative environments
				</p>
				<img src="/images/profile-img.jpg" className="w-120 my-2" />
			</div>
		</>
	);

}
export default About;