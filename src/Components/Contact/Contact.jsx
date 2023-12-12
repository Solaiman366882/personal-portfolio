import { useRef } from "react";
import contactImg from "../../assets/images/contact.png";
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";




const Contact = () => {
    
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_2n5olqa', 'template_s542nzl', form.current, '_VkrsAdOJ0Oh4Iadl')
        .then((result) => {
            if(result.status == 200)
            {
                toast.success('Message Sent Successfully');
            }
        }, (error) => {
            //console.log(error.text);
            toast.success(`${error.text}`);
        });
    }

	return (
		<div className="section-padding w-full" id="contact-section">
			<div className="px-5">
				<div className="title-section flex justify-center items-center">
					<div className="title-left text-center">
						<h3 className="subtitle font-mer inline-block">Contact Me</h3>
						<h2 className="text-white font-bold text-3xl md:text-5xl font-robot capitalize">
							Give your message
						</h2>
					</div>
				</div>
			</div>
			<div className="max-w-screen-xl mx-auto px-5 flex flex-col md:flex-row gap-5 items-center mt-12">
				<div className="flex-1">
					<img src={contactImg} alt="" />
				</div>
				<form action="" className="flex-1" ref={form} onSubmit={sendEmail}>
					<div className="form-area">
						<div className="single-input">
							<label htmlFor="name">Name</label>
							<input
								type="text"
								name="from_name"
								placeholder="Your Name"
								id="name"

							/>
						</div>
						<div className="single-input">
							<label htmlFor="email">Email</label>
							<input
								type="email"
								placeholder="Your Email"
								name="from_email"
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
