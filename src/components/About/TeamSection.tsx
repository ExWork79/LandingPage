import { useContext, useEffect, useRef } from 'react'
import teamDo from '../../assets/team-do.png'
import teamInfor from '../../assets/team-infor.png'
import '../../css/About/TeamSection.css'
import { AppContext } from '../../App'
import { triggerEventNameOfScroll } from '../../DumpData'
const TeamSection = () => {
    const message = useContext(AppContext)
    const animationSection1 = useRef('')
    const animationSection2 = useRef({
        picture: '',
        text: ''
    })
    const animationSection3 = useRef({
        picture: '',
        text: ''
    })
    if(message === triggerEventNameOfScroll.aboutPage.teamSection.section2){
        animationSection2.current.picture = '100% 100%'
        animationSection2.current.text = "l1 3s ease-in alternate"
    }
    else if(message === triggerEventNameOfScroll.aboutPage.teamSection.section3){
        animationSection3.current.picture = '100% 100%'
        animationSection3.current.text = "l1 3s ease-in alternate"
    }
    else if(message === triggerEventNameOfScroll.aboutPage.teamSection.section1)
        animationSection1.current = "l1 3s ease-in alternate"
    return ( 
        <div className="team-section">
            <h1 style={{animation:animationSection1.current}}>Many people miss out</h1>
            <div className="team-do-infor">
                <div className='item-1'>
                    <img style={{maskPosition:animationSection2.current.picture}} src={teamDo} alt="" />
                </div>
                <div className="item-2">
                    <h2 style={{animation:animationSection2.current.text}}>What We Do</h2>
                    <p>Many people miss out on wealth potential because they don’t have time to research unique tax and investment ideas or retirement strategies. We help people with specialized strategies to control taxes, reduce fees, and protect against unnecessary risk so they can retire with confidence. We provide informational meetings & workshops to individuals, companies, and organizations on a variety of financial topics. Our education provides valuable financial information to empower people to grow in their understanding of their personal finances.</p>
                    <button className='btn-self-design'>Meet the team</button>
                </div>
            </div>
            <div className="team-infor">
                <div className="item-2">
                    <h2 style={{animation:animationSection3.current.text}}>Who We Are</h2>
                    <p>We are people just like you who embrace life and tirelessly pursue our own dreams. What sets us apart is our common passion and commitment to empower you, the brave individual, with financial confidence and a sense of possibility as you embark on your next adventure in life. We deeply understand the overwhelming nature of the sea of unfiltered and contradictory financial information out there. It's not a simple case of one-size-fits-all advice. Instead, we believe that each person deserves truth and personalized wisdom, the same advice we would give our own families. At the end of it all, we are dedicated professionals who genuinely care about your well-being, and we will prove it over and over again. YOU DESERVE NO LESS!</p>
                </div>
                <div className='item-1'>
                    <img src={teamInfor} style={{maskPosition:animationSection3.current.picture}} alt="" />
                </div>
            </div>
        </div>
     );
}
 
export default TeamSection;