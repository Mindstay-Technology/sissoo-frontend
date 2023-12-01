import React, { useState } from 'react';
import './Otp_Verify.css'; 
import HeaderImage from "../Image/LOGO.png"
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SliderSignin from './SliderSignin';
import { styled } from '@mui/system';
const ZoomableMailOutlineIcon = styled(MailOutlineIcon)`
  color: #FFFFFF;
  background-color:#2676C24D ;
  font-size: 3.5rem;
  border-radius: 50%;
  padding: 10px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(2.1);
  }
`;
const ZoomableGitHubIcon = styled(GitHubIcon)`
  backgroundColor:"#ffffff";
  borderRadius:"50%";
  color: #2676C24D;
  font-size: 4rem;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(2.1);
  }
`;
const OtpVerifyIn = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // Default language

  // Handler function to update the selected language
  const handleLanguageChange = (event) => {
      setSelectedLanguage(event.target.value);
  };
  const handleChange = (e, index) => {
    const value = e.target.value;

    // Check if the input is a digit
    if (/^\d*$/.test(value)) {
      // Update the OTP array with the new value at the specified index
      setOtp(prevOtp => {
        const newOtp = [...prevOtp];
        newOtp[index] = value;
        return newOtp;
      });

      // Move to the next input box if a digit is entered
      if (index < 3 && value !== '') {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      // Handle backspace functionality
      setOtp(prevOtp => {
        const newOtp = [...prevOtp];
        newOtp[index] = '';

        // Move focus to the previous input box on backspace
        if (index > 0) {
          document.getElementById(`otp-input-${index-1}`).focus();
        } else {
          // If it's the first input box, set focus to the current input
          document.getElementById(`otp-input-${index}`).focus();
        }

        return newOtp;
      });
    }
  };

  return (
    <div className='otp-verify-page'>
      <div className='parent-otp'>
        <div className='otp-logo-header-parent'>
          <div className='otp-logo-header-container'>
              <div>
                <img src={HeaderImage} alt='' className='otp-img-div'/>
              </div>
              <div className='otp-lang-bar'>
                <div><HelpOutlineIcon className='otp-help-icon'/></div>
                    <div className='otp-lang-sel'>
                      <label className='otp-lang-label' htmlFor="language"><LanguageIcon/>
                          <select  id="otp-language" value={selectedLanguage} onChange={handleLanguageChange}>
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
        {/* section2 */}
        <div className='parent-otp'>
            <div className='otp-parent'>
                <div className='otp-container'>
                    <div className='otp-left'>
                        <h1 className='otp-header'>Verify Your Account</h1>
                        <h3 className='otp-mobile'>Enter the 4-digit OTP to verify your Sissoo Training 
                            App account, Resend OTP if needed</h3>
                        <div className='otp-input-container'>
                          {otp.map((digit, index) => (
                            <label htmlFor="mobileNumber">
                            <input
                              key={index}
                              id={`otp-input-${index}`}
                              className='otp-input'
                              type="text"
                              value={digit}
                              maxLength="1"
                              onChange={(e) => handleChange(e, index)}
                              onKeyDown={(e) => handleKeyDown(e, index)}
                            /></label>
                          ))}
                        </div>
                        <button className='sigin-otp-verify'>Verify</button>
                        <p className='resend-para'>If you haven't received the OTP ?<span>  Resend !</span></p>

                    </div>
                    <div className='otp-right'>
                      <SliderSignin/>
                    </div>
                </div>
            </div>
        </div>
      {/* section 3 */}
      <div  className='parent-otp'>
            <div className='line-parent-otp'>
                <hr style={{width:"40%", marginRight: "10px" }}/>
                <span className='line-para-otp'>Or With</span>
                <hr style={{width:"40%", marginLeft: "10px" }}/>
            </div>
        </div>
        {/* section 4 */}
        <div className='parent-otp'>
            <div className='icon-parent-otp'>
                <div><ZoomableMailOutlineIcon/></div>
                <div><ZoomableGitHubIcon /></div>
            </div>
        </div>
    </div>
  );
}

export default OtpVerifyIn;
