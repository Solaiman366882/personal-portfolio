import ImageGallery from "react-image-gallery";
import { Link } from "react-router-dom";
import arrowIcon from "../../assets/images/icon/icons8-down-left-arrow-24.png";
import blogImg1 from "../../assets/images/product-img/blog/1.png";
import blogImg2 from "../../assets/images/product-img/blog/2.png";
import blogImg3 from "../../assets/images/product-img/blog/3.png";
import blogImg4 from "../../assets/images/product-img/blog/4.png";
import blogImg5 from "../../assets/images/product-img/blog/5.png";
import blogImg6 from "../../assets/images/product-img/blog/6.png";
import blogImg7 from "../../assets/images/product-img/blog/7.png";
import mediImg1 from "../../assets/images/product-img/medicamp/1.png";
import mediImg2 from "../../assets/images/product-img/medicamp/2.png";
import mediImg3 from "../../assets/images/product-img/medicamp/3.png";
import mediImg4 from "../../assets/images/product-img/medicamp/4.png";
import mediImg5 from "../../assets/images/product-img/medicamp/5.png";
import foodImg1 from "../../assets/images/product-img/food/1.png";
import foodImg2 from "../../assets/images/product-img/food/2.png";
import foodImg3 from "../../assets/images/product-img/food/3.png";
import foodImg4 from "../../assets/images/product-img/food/4.png";
import foodImg5 from "../../assets/images/product-img/food/5.png";
import foodImg6 from "../../assets/images/product-img/food/6.png";
import wedImg1 from "../../assets/images/product-img/wedding/1.png";
import wedImg2 from "../../assets/images/product-img/wedding/2.png";
import wedImg3 from "../../assets/images/product-img/wedding/3.png";
import wedImg4 from "../../assets/images/product-img/wedding/4.png";
import wedImg5 from "../../assets/images/product-img/wedding/5.png";

const Project = () => {
	const projects = [
		{
			original: blogImg1,
			thumbnail: blogImg1,
		},
		{
			original: blogImg2,
			thumbnail: blogImg2,
		},
		{
			original: blogImg3,
			thumbnail: blogImg3,
		},
		{
			original: blogImg4,
			thumbnail: blogImg4,
		},
		{
			original: blogImg5,
			thumbnail: blogImg5,
		},
		{
			original: blogImg6,
			thumbnail: blogImg6,
		},
		{
			original: blogImg7,
			thumbnail: blogImg7,
		},
	];
	const project2 = [
		{
			original: mediImg1,
			thumbnail: mediImg1,
		},
		{
			original: mediImg2,
			thumbnail: mediImg2,
		},
		{
			original: mediImg3,
			thumbnail: mediImg3,
		},
		{
			original: mediImg4,
			thumbnail: mediImg4,
		},
		{
			original: mediImg5,
			thumbnail: mediImg5,
		},
	];
	const project3 = [
		{
			original: foodImg1,
			thumbnail: foodImg1,
		},
		{
			original: foodImg2,
			thumbnail: foodImg2,
		},
		{
			original: foodImg3,
			thumbnail: foodImg3,
		},
		{
			original: foodImg4,
			thumbnail: foodImg4,
		},
		{
			original: foodImg5,
			thumbnail: foodImg5,
		},
		{
			original: foodImg6,
			thumbnail: foodImg6,
		},
	];
	const project4 = [
		{
			original: wedImg1,
			thumbnail: wedImg1,
		},
		{
			original: wedImg2,
			thumbnail: wedImg2,
		},
		{
			original: wedImg3,
			thumbnail: wedImg3,
		},
		{
			original: wedImg4,
			thumbnail: wedImg4,
		},
		{
			original: wedImg5,
			thumbnail: wedImg5,
		},
	];
	return (
		<div
			className="w-full section-padding bg-secondary-bg"
			id="project-section"
		>
			<div className="max-w-screen-xl px-5 mx-auto">
				<div className="title-section flex flex-col lg:flex-row justify-between gap-5 items-center">
					<div className="title-left text-center lg:text-left">
						<h3 className="subtitle font-mer inline-block lg:block">
							recent work
						</h3>
						<h2 className="text-white font-bold text-5xl font-robot capitalize">
							Some of my favorite <br /> projects.
						</h2>
					</div>
					<div className="title-right">
						<a href="#" className="c-btn">
							see all projects
						</a>
					</div>
				</div>
				<div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-5">
					<div className="project-card bg-primary-bg p-2 border-2 border-primary-color">
						<div>
							<ImageGallery items={projects} />
						</div>
						<div className="p-4">
							<h1 className="mt-3 text-2xl md:text-4xl font-bold text-white capitalize">
								elijah blog - website
							</h1>
							<div className="flex gap-5">
								<Link
									className="mt-4 capitalize text-primary-color font-semibold text-lg flex gap-3 items-center"
									to="https://elaijas-blog.web.app/"
									target="_blank"
								>
									see project <img src={arrowIcon} alt="" />
								</Link>
								<Link
									className="mt-4 capitalize text-primary-color font-semibold text-lg flex gap-3 items-center"
									to="https://github.com/Solaiman366882/Elijah_Blogs_client"
									target="_blank"
								>
									see code <img src={arrowIcon} alt="" />
								</Link>
							</div>
						</div>
					</div>
					<div className="project-card bg-primary-bg p-2 border-2 border-primary-color">
						<div>
							<ImageGallery items={project2} />
						</div>
						<div className="p-4">
							<h1 className="mt-3 text-2xl md:text-4xl font-bold text-white capitalize">
								Atom Camp - website
							</h1>

							<div className="flex gap-5">
								<Link
									className="mt-4 capitalize text-primary-color font-semibold text-lg flex gap-3 items-center"
									to="https://atom-8ce7b.web.app/"
									target="_blank"
								>
									see project <img src={arrowIcon} alt="" />
								</Link>
								<Link
									className="mt-4 capitalize text-primary-color font-semibold text-lg flex gap-3 items-center"
									to="https://github.com/Solaiman366882/Medi_camp_Client"
									target="_blank"
								>
									see code <img src={arrowIcon} alt="" />
								</Link>
							</div>
						</div>
					</div>
					<div className="project-card bg-primary-bg p-2 border-2 border-primary-color">
						<div>
							<ImageGallery items={project3} />
						</div>
						<div className="p-4">
							<h1 className="mt-3 text-2xl md:text-4xl font-bold text-white capitalize">
								Foodily - website
							</h1>

							<div className="flex gap-5">
								<Link
									className="mt-4 capitalize text-primary-color font-semibold text-lg flex gap-3 items-center"
									to="https://brand-shop-baf20.web.app/"
									target="_blank"
								>
									see project <img src={arrowIcon} alt="" />
								</Link>
								<Link
									className="mt-4 capitalize text-primary-color font-semibold text-lg flex gap-3 items-center"
									to="https://github.com/Solaiman366882/Food_Bevarage_Client"
									target="_blank"
								>
									see code <img src={arrowIcon} alt="" />
								</Link>
							</div>
						</div>
					</div>
					<div className="project-card bg-primary-bg p-2 border-2 border-primary-color">
						<div>
							<ImageGallery items={project4} />
						</div>
						<div className="p-4">
							<h1 className="mt-3 text-2xl md:text-4xl font-bold text-white capitalize">
								Wedding management
							</h1>

							<div className="flex gap-5">
								<Link
									className="mt-4 capitalize text-primary-color font-semibold text-lg flex gap-3 items-center"
									to="https://react-wedding-planning.web.app/"
									target="_blank"
								>
									see project <img src={arrowIcon} alt="" />
								</Link>
								<Link
									className="mt-4 capitalize text-primary-color font-semibold text-lg flex gap-3 items-center"
									to="https://github.com/Solaiman366882/fire-auth-react"
									target="_blank"
								>
									see code <img src={arrowIcon} alt="" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;
