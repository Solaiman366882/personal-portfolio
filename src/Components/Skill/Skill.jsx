import ProgressBar from "@ramonak/react-progress-bar";
const Skill = () => {
	return (
		<div className="w-full bg-secondary-bg section-padding" id="skill">
			<div className="max-w-screen-xl px-5 mx-auto">
				<div className="title-section flex justify-center items-center">
					<div className="title-left text-center">
						<h3 className="subtitle font-mer inline-block">
							My experience & Education
						</h3>
						<h2 className="text-white font-bold text-3xl md:text-5xl font-robot capitalize">
							Technology that i have Explored
						</h2>
					</div>
				</div>
				<div className="mt-12 flex flex-col lg:flex-row gap-5">
					<div className="w-full flex-1 mx-auto">
						<h2 className="mb-6 text-white font-bold font-robot text-3xl pb-2 inline-block border-b-2 border-primary-bg">
							Skills:
						</h2>
						<div className="mb-5">
							<h3 className="text-white font-bold text-xl font-robot">
								Tailwind
							</h3>
							<ProgressBar
								completed="90"
								bgColor="#079211"
								className="flex-1"
								animateOnRender={true}
							></ProgressBar>
						</div>
						<div className="mb-5">
							<h3 className="text-white font-bold text-xl font-robot">
								Bootstrap
							</h3>
							<ProgressBar
								completed="86"
								bgColor="#079211"
								className="flex-1"
								animateOnRender={true}
							></ProgressBar>
						</div>
						<div className="mb-5">
							<h3 className="text-white font-bold text-xl font-robot">
								MongoDB
							</h3>
							<ProgressBar
								completed="70"
								bgColor="#079211"
								className="flex-1"
								animateOnRender={true}
							></ProgressBar>
						</div>
						<div className="mb-5">
							<h3 className="text-white font-bold text-xl font-robot">
								React
							</h3>
							<ProgressBar
								completed="84"
								bgColor="#079211"
								className="flex-1"
								animateOnRender={true}
							></ProgressBar>
						</div>
						<div className="mb-5">
							<h3 className="text-white font-bold text-xl font-robot">
								Firebase
							</h3>
							<ProgressBar
								completed="88"
								bgColor="#079211"
								className="flex-1"
								animateOnRender={true}
							></ProgressBar>
						</div>
						<div className="mb-5">
							<h3 className="text-white font-bold text-xl font-robot">
								Express Js
							</h3>
							<ProgressBar
								completed="65"
								bgColor="#079211"
								className="flex-1"
								animateOnRender={true}
							></ProgressBar>
						</div>
					</div>
					<div className="flex-1 text-right">
						<h2 className="mb-6 text-white font-bold font-robot text-3xl pb-2 inline-block border-b-2 border-primary-bg ">
							Education:
						</h2>
                        <div className=" text-left">
                            <div className="border border-dashed border-primary-color p-5">
                                <h2 className="text-white font-bold font-robot text-3xl mb-3">Diploma In Engineering</h2>
                                <h3 className="text-white font-bold font-robot text-2xl mb-1">Subject: Computer Technology</h3>
                                <h4 className="text-white font-bold font-robot text-xl mb-2">2016 - 2020</h4>
                                <h4 className="text-primary-color font-bold font-robot text-xl mb-2">Sherpur Polytechnic Institute</h4>
                            </div>
                            <div className="border border-dashed border-primary-color p-5">
                                <h2 className="text-white font-bold font-robot text-3xl mb-3">SSC</h2>
                                <h3 className="text-white font-bold font-robot text-2xl mb-1">Group: Science</h3>
                                <h4 className="text-white font-bold font-robot text-xl mb-2">2014 - 2016</h4>
                                <h4 className="text-primary-color font-bold font-robot text-xl mb-2">Idrisia Kamil Madrasah</h4>
                            </div>
                        </div>
 
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skill;
