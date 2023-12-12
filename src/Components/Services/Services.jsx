import webDesignImg from "../../assets/images/icon/web-design.png";
import frontImg from "../../assets/images/icon/front-end.png";
import responsiveImg from "../../assets/images/icon/responsive-design.png"

const Services = () => {
	return (
		<div className="w-full section-padding" id="service-section">
			<div className="max-w-screen-xl mx-auto px-5">
				<div className="title-section flex justify-between gap-5 items-center">
					<div className="title-left">
						<h3 className="subtitle font-mer">services</h3>
						<h2 className="text-white font-bold text-5xl font-robot capitalize">
							Services i provide mostly
						</h2>
					</div>
					<div className="title-right">
						<p className="text-secondary-color font-robot font-medium">
							Discover the best services i offer, and it can be{" "}
							<br /> customized according to your project.
						</p>
					</div>
				</div>
				<div className="service-area grid grid-cols-3 gap-5 mt-12">
					<div className="service-card border-b-4 border-primary-color text-center py-12 px-6 bg-secondary-bg rounded-lg">
						<div className="service-icon">
							<img src={webDesignImg} className="mx-auto w-16 h-16" alt="" />
						</div>
						<div className="service-text mt-6">
							<h2 className="font-robot text-white font-bold text-3xl mb-5">Web Design</h2>
							<p className="text-secondary-color font-robot font-medium">
								I offer innovative and attention grabbing web design.
                                From initial ideation to implementation.
							</p>
						</div>
					</div>
					<div className="service-card border-b-4 border-primary-color text-center py-12 px-6 bg-secondary-bg rounded-lg">
						<div className="service-icon">
							<img src={frontImg} className="mx-auto w-16 h-16" alt="" />
						</div>
						<div className="service-text mt-6">
							<h2 className="font-robot text-white font-bold text-3xl mb-5">Frontend Develop</h2>
							<p className="text-secondary-color font-robot font-medium">
								I offer innovative and attention grabbing web design.
                                From initial ideation to implementation.
							</p>
						</div>
					</div>
					<div className="service-card border-b-4 border-primary-color text-center py-12 px-6 bg-secondary-bg rounded-lg">
						<div className="service-icon">
							<img src={responsiveImg} className="mx-auto w-16 h-16" alt="" />
						</div>
						<div className="service-text mt-6">
							<h2 className="font-robot text-white font-bold text-3xl mb-5">Responsive Design</h2>
							<p className="text-secondary-color font-robot font-medium">
								I offer innovative and attention grabbing web design.
                                From initial ideation to implementation.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
