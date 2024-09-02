import reactPic from '../../assets/react.svg'
import missionPic from '../../assets/mission.png'
import '../../css/About/IntroSection.css'
const IntroSection = () => {
    return ( 
        <div className="intro-section">
                <h1>SIDEJ</h1>
                <div className="intro-infor">
                    <div className='item-1'>
                        <img src={reactPic} alt="" />
                        {/* <p>We are a team of financial experts who go above and beyond the average financial planner to make sure your retirement plan is built exclusively for you. We’ll make sure your personalized strategy is savvy, stable, and predictable. The route to retirement is not a single road. It is a journey to the place where all roads converge. We make sure you confidently reach your destination.</p> */}

                    </div>
                    <div className="item-2">
                        <p>We are a team of financial experts who go above and beyond the average financial planner to make sure your retirement plan is built exclusively for you. We’ll make sure your personalized strategy is savvy, stable, and predictable. The route to retirement is not a single road. It is a journey to the place where all roads converge. We make sure you confidently reach your destination.</p>
                        <button className='btn-self-design'>Contact us</button>
                    </div>
                </div>
                <div className="value-infor">
                    <div className="item-1">
                        <img src={missionPic} alt="" />
                        <h2>Mission</h2>
                        <p>To make your retirement better, plain and simple.</p>
                    </div>
                    <div className="item-1">
                        <img src={missionPic} alt="" />
                        <h2>Vision</h2>
                        <p>The retirement you picture; the future you deserve. </p>
                    </div>
                    <div className="item-1">
                        <img src={missionPic} alt="" />
                        <h2>Values</h2>
                        <p>Knowledge, security, simplicity, and a few laughs along the way.</p>
                    </div>
                </div>
            </div>
     );
}
 
export default IntroSection;