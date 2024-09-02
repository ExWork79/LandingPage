import '../css/About.css'
import IntroSection from '../components/About/IntroSection';
import TeamSection from '../components/About/TeamSection';
const About = () => {
    return ( 
        <div className="about-page">
            <IntroSection/>
            <TeamSection/>
        </div>
     );
}
 
export default About;