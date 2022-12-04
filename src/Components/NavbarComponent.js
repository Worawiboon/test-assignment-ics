// import {Link,withRouter} from 'react-router-dom'
import './Navbar.css';
import logo from '../assets/logo.jpeg'
import profile from '../assets/profile.png'

const NavbarComponent = () => {
    return (
        <div className="bg-nav">
            <div className="nav">
            <nav className="navbar">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" className="d-block d-xxl-none d-flex align-items-center text-white text-decoration-none">
                            <img src={logo} alt="mdo" width="50" height="50" className="logo" />
                        </a>
                    </div>
                    <div className="d-flex align-items-center justify-content-end gap-3">
                        <a href="/" className="d-none d-xxl-block">
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="25" viewBox="0 0 21 25" fill="none">
                                <path d="M15.9706 17.4702V17.6774L16.117 17.8238L18.3235 20.0303V20.4997H0.5V20.0303L2.70649 17.8238L2.85294 17.6774V17.4702V11.5879C2.85294 8.13873 4.66278 5.37352 7.76233 4.63913L8.14706 4.54797V4.1526V3.3526C8.14706 2.65227 8.71144 2.08789 9.41177 2.08789C10.1121 2.08789 10.6765 2.65227 10.6765 3.3526V4.1526V4.54765L11.0608 4.63904C14.1493 5.37336 15.9706 8.15094 15.9706 11.5879V17.4702ZM11.1955 22.6761C10.9756 23.4538 10.2567 24.0291 9.41177 24.0291C8.55819 24.0291 7.84473 23.4547 7.6271 22.6761H11.1955Z" fill="white" stroke="white" />
                                <circle cx="15.2938" cy="5.70588" r="5.20588" fill="#F7685B" stroke="white" />
                            </svg>
                        </a>
                        <img src={profile} alt="mdo" width="32" height="32" className="rounded-circle d-none d-xl-block" />
                        <img src={profile} alt="mdo" width="40" height="40" className="rounded-circle d-block d-xl-none" />
                        <div className="d-flex justify-content-end align-items-center align-middle" >
                            <div className="name-profile pe-2">
                                Akkarapol
                            </div>
                            <a href="/" className="d-none d-xxl-block  text-decoration-none">
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5" fill="none">
                                    <path d="M4 4.33325L7.5 0.833252L6.6775 0.0107521L4 2.68242L1.3225 0.0107517L0.499999 0.833251L4 4.33325Z" fill="white" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        </div>
        


    )
}

export default NavbarComponent;