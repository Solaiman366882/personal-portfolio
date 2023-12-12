import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
	const links = (
		<>
			<li className="menu-links">
				<NavLink to="/">Home</NavLink>
			</li>
			<li className="menu-links">
				{/* <NavLink to="#service-section">Services</NavLink> */}
				<a href="#service-section">Services</a>
			</li>
			<li className="menu-links">
				{/* <NavLink to="#service-section">Services</NavLink> */}
				<a href="#project-section">Projects</a>
			</li>
			<li className="menu-links">
				<NavLink to="/about">about me</NavLink>
			</li>
			<li className="menu-links">
				<NavLink to="/contact" className="c-btn">Contact me</NavLink>
			</li>
		</>
	);

	return (
		<div className="">
			<div className="navbar bg-primary-bg md:px-5">
				<div className="flex w-full justify-between items-center">
					<Link to="/" className="text-white logo font-mer text-3xl font-bold block -mt-2">
						Solaiman
						<span className="text-primary-color text-6xl ">
							.
						</span>{" "}
					</Link>
					<div className="navbar-en">
						<div className="dropdown block md:hidden">
							<div
								tabIndex={0}
								role="button"
								className="btn btn-ghost md:hidden"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5 text-white"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h8m-8 6h16"
									/>
								</svg>
							</div>
							<ul
								tabIndex={0}
								className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primary-bg rounded-box w-52 right-0"
							>
								{links}
							</ul>
						</div>
						<div className="flex-none hidden md:flex">
							<ul className="menu menu-horizontal items-center px-1">
								{links}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
