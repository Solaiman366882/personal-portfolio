import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="w-full bg-[#050507]">
			<div className="max-w-screen-xl px-5 mx-auto">
				<div className="section-padding border-b-2 border-gray-500 flex justify-between">
					<div>
						<Link
							to="/"
							className="text-white logo font-mer text-3xl font-bold block -mt-2"
						>
							Solaiman
							<span className="text-primary-color text-6xl ">
								.
							</span>
						</Link>
					</div>
					<div className="flex gap-6 md:gap-12 justify-between ">
						<div>
							<h2 className="text-white font-robot font-bold text-2xl mb-6">
								Information
							</h2>
							<ul>
								<li className="text-secondary-color py-2 font-medium">
									<a href="tel:+8801774960511">
										+880 1744960511
									</a>
								</li>
								<li className="text-secondary-color py-2 font-medium">
									<a href="mailto:md.soaliman366882@gmail.com">
										md.soaliman366882@gmail.com
									</a>
								</li>
								<li className="text-secondary-color py-2 font-medium">
									Uttara, Dhaka, Bangladesh
								</li>
							</ul>
						</div>
						<div>
							<h2 className="text-white font-robot font-bold text-2xl mb-6">
								Social Media
							</h2>
							<ul>
								<li className="text-secondary-color py-2 font-medium">
									<Link>LinkedIn</Link>
								</li>
								<li className="text-secondary-color py-2 font-medium">
									<a href="mailto:md.soaliman366882@gmail.com">
										<Link>Yahoo</Link>
									</a>
								</li>
								<li className="text-secondary-color py-2 font-medium">
									<Link>Facebook</Link>
								</li>
								<li className="text-secondary-color py-2 font-medium">
									<Link>GitHub</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
                <div className="py-5">
                    <p className="text-center text-secondary-color">All copy rights reserved by Solaiman.</p>
                </div>
			</div>
		</div>
	);
};

export default Footer;
