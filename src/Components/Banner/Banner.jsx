import { TypeAnimation } from "react-type-animation";
import profileImg from "../../assets/images/profile.png";
import resume from "../../assets/images/Answers.pdf";
import "./Banner.css";

const Banner = () => {
	return (
		<div className="w-full bg-primary-bg">
			<div className="max-w-screen-xl px-5 mx-auto">
				<div className="banner-section w-full bg-primary-bg min-h-[90vh] flex flex-col-reverse xl:flex-row justify-between gap-3 xl:gap-10 items-center">
					<div className="banner-text text-center  -mt-6  xl:text-left">
						<h1 className="text-primary-color text-3xl font-bold capitalize font-robot">
							Hello i am Md. Solaiman
						</h1>

						<h2 className="font-bold text-xl mb-5">
							<TypeAnimation
								sequence={[
									// Same substring at the start will only be typed out once, initially
									"Web Developer",
									1000, // wait 1s before replacing "Mice" with "Hamsters"
									"Web Designer",
									1000,
									"Front End Developer",
									1000,
									"React Developer",
									1000,
								]}
								wrapper="span"
								speed={50}
								className="text-xl md:text-3xl xl:text-5xl "
								style={{
									//fontSize: "4em",
									display: "inline-block",
									color: "#fff",
									fontWeight: "700",
								}}
								repeat={Infinity}
							/>
						</h2>
						<p className="text-secondary-color font-robot font-medium">
							As a junior web developer, I bring a collaborative
							and intuitive approach to projects, <br className="hidden xl:block" /> combining
							technical expertise with a commitment to creating
							user-centric <br className="hidden xl:block" /> solutions.My core values include
							a dedication to teamwork, user satisfaction,
							<br className="hidden xl:block" /> integrity. These principles guide my work,
							fostering a positive and innovative <br className="hidden xl:block" />{" "}
							contribution to web development projects.{" "}
						</p>
						<div className="btn-area mt-6 flex justify-center xl:justify-start gap-5">
							<a
								href="mailto:md.solaiman366882@gmail.com"
								className="c-btn active"
							>
								Mail me
							</a>
							<a
								href={resume}
								className="c-btn"
								download="solaiman_resume.pdf"
							>
								resume
							</a>
						</div>
					</div>
					<div className="banner-img">
						<div className="img-wrap xl:pr-12">
							<img src={profileImg} alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
