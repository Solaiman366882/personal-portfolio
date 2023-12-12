
const Mind = () => {
    return (
        <div className="w-full border-l-8 border-primary-color section-padding">
            <div className="max-w-screen-xl mx-auto px-5">
                <div className="flex flex-col gap-5 md:flex-row justify-between items-center">
                    <div className="text-center md:text-left">
                        <h2 className="font-bold text-3xl md:text-5xl text-white font-robot mb-5">Have any project in mind?</h2>
                        <p className="font-robot font-medium text-lg text-secondary-color">Feel free to contact me or just say friendly hello.</p>
                    </div>
                    <div>
                        <a href="#contact-section" className="c-btn">Contact me</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mind;