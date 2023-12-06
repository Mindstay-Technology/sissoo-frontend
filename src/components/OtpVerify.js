import React, { useState } from 'react';
import './OtpVerify.css';  // Import your CSS file
import Logo from '../images/Header_logo.png';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import { Badge } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Data } from './Data';
import { useNavigate } from 'react-router-dom';

const OtpVerify = () => {
  const [otp, setOtp] = useState(['', '', '', '']);

  const RoleSelection = useNavigate('/selectrole')

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
      // Prevent the default behavior of the backspace key
      e.preventDefault();
  
      // Handle backspace functionality
      setOtp((prevOtp) => {
        const newOtp = [...prevOtp];
        newOtp[index] = '';
  
        // Move focus to the previous input box on backspace
        if (index > 0) {
          document.getElementById(`otp-input-${index - 1}`).focus();
        } else {
          // If it's the first input box, set focus to the current input
          document.getElementById(`otp-input-${index}`).focus();
        }
  
        return newOtp;
      });
    }
  };

  return (
    <div className='Otp_Verify'>
      <div className='Content'>
        <div className='Otp_Header'>
          <img src={Logo} alt='Header_Logo' />
          <div className='Help'>
            <HelpOutlineRoundedIcon sx={{ color: '#2676C2', fontSize: '2rem' }} />
            <div className='Language'>
              <Badge className='WIcon'>
                <LanguageRoundedIcon sx={{ color: '#2676C2', fontSize: '2rem' }} />
                <select name="English" id="English" placeholder='English'>
                  <option value="">English</option>
                  <option value="">Hindi</option>
                  <option value="">Kannada</option>
                  <option value="">Marathi</option>
                  <option value="">Tamil</option>
                  <option value="">Telugu</option>
                  <option value="">Malayalam</option>
                </select>
              </Badge>
            </div>
          </div>
        </div>
        <div className='Reciever'>
          <div className='Reciever_Align'>
            <h2>Trailblazer or Voyager,<br />Select Your Role!</h2>
            <p>Enter the 4-digit OTP to verify your Sissoo Training <br />App account, Resend if needed </p>
            <div className='otp-input-container'>
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-input-${index}`}
                  type="text"
                  value={digit}
                  maxLength="1"
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  style={{textAlign:'center', fontFamily:'poppins', fontSize:'1.5rem', color:'#2676C2'}}
                />
              ))}
            </div>
            <button onClick={()=>{RoleSelection('/selectrole')}}>Verify</button> 
            {/*  */}
            <p>If you haven't received the OTP?</p>
          </div>
          <div className='Carousel'>
          <Slider
                autoplay
                autoplaySpeed={2500}
                dots={false}
                arrows={false}
                infinite
            >
                {
                    Data.map(item => (
                        <img
                            className='SliderImg'
                            src={item}
                            alt="SliderImages"

                        />
                    ))
                }
            </Slider>
          </div>
        </div>
        <div className='Git_Email'>
          <div className='hrtag'>
            <span className="line"></span>
            <p>Or With</p>
            <span className="line"></span>
          </div>
          <div className='GEIcons'>
            <MailOutlineRoundedIcon sx={{ color: 'white', fontSize: '2.5rem', bgcolor: '#2676C24D', borderRadius: '100%', padding: '6%' }} />
            <GitHubIcon sx={{ color: '#2676C24D', fontSize: '3.75rem' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtpVerify;
