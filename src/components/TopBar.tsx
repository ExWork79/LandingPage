import { Link, useLocation } from 'react-router-dom';
import reactLogo from '../assets/react.svg'
import '../css/TopBar.css'
const TopBar = () => {
    let {pathname} = useLocation()
    console.log(pathname)
    return ( 
        <div className="top-bar">
            <div className="logo-infor">
                <img src={reactLogo} alt="" />
                <div>
                    <span className='item-1'>SIDEJ</span>
                    <br />
                    <span className='item-2'>Technology</span>
                </div>
            </div>
            <div className="navigate-function">
                <Link to={"/"} className={pathname === '/about' ? 'active-link':''}><span>About us</span></Link>
                <Link to={"/"} className={pathname === '/' ? 'active-link':''}>Meet The Team</Link>
                <Link to={"/"} className={pathname === '/a' ? 'active-link':''}>Our Projects</Link>
                <button>Meet us</button>
            </div>
        </div>
     );
}
 
export default TopBar;