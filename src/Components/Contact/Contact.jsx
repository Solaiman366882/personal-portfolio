import contactImg from "../../assets/images/contact.png";

const Contact = () => {
	return (
		<div className="section-padding w-full">
			<div className="px-5">
				<div className="title-section flex justify-center items-center">
					<div className="title-left text-center">
						<h3 className="subtitle font-mer inline-block">Contact Me</h3>
						<h2 className="text-white font-bold text-5xl font-robot capitalize">
							Give your message
						</h2>
					</div>
				</div>
			</div>
			<div className="max-w-screen-xl mx-auto px-5 flex gap-5 items-center mt-12">
				<div className="flex-1">
					<img src={contactImg} alt="" />
				</div>
				<form action="" className="flex-1">
					<div className="form-area">
						<div className="single-input">
							<label htmlFor="name">Name</label>
							<input
								type="text"
								name="name"
								placeholder="Your Name"
								id="name"
							/>
						</div>
						<div className="single-input">
							<label htmlFor="email">Email</label>
							<input
								type="email"
								placeholder="Your Email"
								name="email"
								id="email"
							/>
						</div>
						<div className="single-input">
							<label htmlFor="message">Message</label>
							<textarea
								name="message"
								id="message"
								cols="30"
								rows="6"
                                className="w-full block border-2 mess"
                                placeholder="Message"
							></textarea>
						</div>
						<div className="text-center">
							<input
								type="submit"
								value="Send Message"
								className="c-btn active"
							/>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contact;
