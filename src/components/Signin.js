import React, { useState } from 'react'
import "./Signin.css"
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import HeaderImg from "../images/HeaderBg.png"
import LanguageIcon from '@mui/icons-material/Language';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import SliderSignin from './SliderSignin';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
const ZoomableMailOutlineIcon = styled(MailOutlineIcon)`
  color: #2676C2;
  background-color: #FFFFFF80;
  font-size: 3rem;
  border-radius: 50%;
  padding: 10px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.3);
  }
`;
const ZoomableGitHubIcon = styled(GitHubIcon)`
  color: #FFFFFF80;
  font-size: 4rem;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.3);
  }
`;
function Signin() {
    const [selectedLanguage, setSelectedLanguage] = useState('en'); // Default language
    const [mobileNumber, setMobileNumber] = useState('');
    const [isValidMobileNumber, setIsValidMobileNumber] = useState(true); // Track mobile number validity
    const [showInvalidMobilePopup, setShowInvalidMobilePopup] = useState(false);
    // const [showPopup, setShowPopup] = useState(false);
    const [showEmptyMobilePopup, setShowEmptyMobilePopup] = useState(false);    
    const otpverify = useNavigate(); // React Router history for navigation
    // Handler function to update the selected language
    const handleLanguageChange = (event) => {
        setSelectedLanguage(event.target.value);
    };

    const handleInputChange = (event) => {
        const inputMobileNumber = event.target.value;
        const sanitizedMobileNumber = inputMobileNumber.replace(/\D/g, '').slice(0, 10);
        setMobileNumber(sanitizedMobileNumber);
        setIsValidMobileNumber(sanitizedMobileNumber.length === 10); // Check if mobile number is 10 digits
    };
    const handleGetOtpClick = () => {
        if (mobileNumber === '') {
            setShowEmptyMobilePopup(true);
        } else if (isValidMobileNumber) {
            otpverify('/otpverify')
        } else {
            setShowInvalidMobilePopup(true);
        }
    };

    const closePopup = () => {
        setShowInvalidMobilePopup(false);
        setShowEmptyMobilePopup(false);
    };
    // const handleClickOutside = (event) => {
    //     if (
    //         showInvalidMobilePopup ||
    //         showEmptyMobilePopup
    //     ) {
    //         const popupContainers = document.querySelectorAll('.popup');
    //         if (!popupContainers[0].contains(event.target)) {
    //             closePopup();
    //         }
    //     }
    // };

    //  useEffect(() => {
    //         console.log('showInvalidMobilePopup:', showInvalidMobilePopup);
    //         console.log('showEmptyMobilePopup:', showEmptyMobilePopup);

    //     function handleClickOutside(event) {
    //         if (showInvalidMobilePopup || showEmptyMobilePopup) {
    //             const popupContainers = document.querySelectorAll('.popup');
    //             if (!popupContainers[0].contains(event.target)) {
    //                 closePopup();
    //             }
    //         }
    //     }

    //     document.addEventListener('click', handleClickOutside);

    //     return () => {
    //         document.removeEventListener('click', handleClickOutside);
    //     };
    // }, [showInvalidMobilePopup, showEmptyMobilePopup]);
  return (
    <div className='sigin-page-parent'>
        <div className='parent-signin'>
            <div className='logo-header-parent'>
                <div className='logo-header-container'>
                    <div>
                        <img src={HeaderImg} alt=''/>
                    </div>
                    <div className='lang-bar'>
                        <div><HelpOutlineIcon className='help-icon'/></div>
                        <div className='lang-sel'>
                        <label className='lang-label' htmlFor="language"><LanguageIcon/>
                            <select  id="language" value={selectedLanguage} onChange={handleLanguageChange}>
                                <option value="en">English</option>
                                <option value="es">Spanish</option>
                                <option value="fr">French</option>
                                {/* Add more language options as needed */}
                            </select>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* section 2 */}
        <div className='parent-signin'>
            <div className='signin-parent'>
                <div className='signin-container'>
                    <div className='signin-left'>
                            <h1 className='signin-header'>Welcome To SISSOO</h1>
                            <h3 className='sigin-mobile'>Mobile number</h3>
                            <label className='sigin-label' htmlFor="mobileNumber">
                                <input
                                    type="text"
                                    id="mobileNumber"
                                    name="mobileNumber"
                                    value={mobileNumber}
                                    onChange={handleInputChange}
                                    placeholder="Enter your mobile number"
                                />
                            </label>
                            <button className='sigin-otp' onClick={handleGetOtpClick}>
                                GET OTP
                            </button>
                    </div>
                    <div className='sigin-right'>
                        <SliderSignin/>
                    </div>
                </div>
            </div>
        </div>
        {/* section 3 */}
        <div  className='parent-signin'>
            <div className='line-parent'>
                <hr style={{width:"40%", marginRight: "10px" }}/>
                <span className='line-para'>Or With</span>
                <hr style={{width:"40%", marginLeft: "10px" }}/>
            </div>
        </div>
        {/* section 4 */}
        <div className='parent-signin'>
            <div className='icon-parent'>
                <div><ZoomableMailOutlineIcon /></div>
                <div><ZoomableGitHubIcon /></div>
            </div>
        </div>
        {/* Invalid Mobile Number Popup */}
        <div className={`popup ${showInvalidMobilePopup ? 'active' : ''}`}>
                <span className="popup-close" onClick={closePopup}>
                    &times;
                </span>
                <div className="popup-content">
                    Please enter a valid 10-digit mobile number.
                </div>
            </div>

            {/* Empty Mobile Number Popup */}
            <div className={`popup ${showEmptyMobilePopup ? 'active' : ''}`}>
                <span className="popup-close" onClick={closePopup}>
                    &times;
                </span>
                <div className="popup-content">
                    Please enter a mobile number.
                </div>
            </div>
    </div>
  )
}

export default Signin;