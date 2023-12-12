import Banner from "../../Components/Banner/Banner";
import Contact from "../../Components/Contact/Contact";
import Mind from "../../Components/Mind/Mind";
import Project from "../../Components/Projects/Project";
import Services from "../../Components/Services/Services";
import Skill from "../../Components/Skill/Skill";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Project></Project>
            <Contact></Contact>
            <Skill></Skill>
            <Mind></Mind>
        </div>
    );
};

export default Home;