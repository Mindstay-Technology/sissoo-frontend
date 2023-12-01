import React from 'react'
import LanguageRounded from '@mui/icons-material/LanguageRounded'
import HelpOutlineRounded from '@mui/icons-material/HelpOutlineRounded'
import LocalLibraryRoundedIcon from '@mui/icons-material/LocalLibraryRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Data } from './Data';
import { Badge } from '@mui/material'
import './RoleSelection.css'
import LOGO from '../images/Header_Logo_RS.png'
import { useNavigate } from 'react-router-dom';

const RoleSelection = () => {
    const employee = useNavigate('/employer')
    const skillsset = useNavigate('/corporatetrainer')
    return (
        <div className='RSMain'>
            <div className='RSHead'>
                <img src={LOGO} alt="Header_Logo" />
                <div className='Help'>
                    <HelpOutlineRounded sx={{ color: '#FFF', fontSize: '2rem' }} />
                    <div className='Language'>
                        <Badge className='LIcon'>
                            <LanguageRounded sx={{ color: '#FFF', fontSize: '2rem' }} />
                            <select name="English" id="RSEnglish" placeholder='English'>
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
            <div className='RSRole'>
                <div className='Select_Role'>
                    <h2>Trailblazer or Voyager,<br />Select Your Role!</h2>
                    <div className='Unlock'>
                        <Badge>
                            <GroupsRoundedIcon sx={{ color: '#2676C2', fontSize: '4rem' }} className='UnlockIcon' />
                        </Badge>
                        <div className='Inspire' onClick={()=>employee('/employer')}>
                            <h3>Unlock Team Excellence</h3>
                            <p>Lead team growth effortlessly as an <br />
                                Employer with sissoo Training</p>
                        </div>
                    </div>
                    <div className='Unlock' onClick={()=>skillsset('/corporatetrainer')}>
                        <Badge>
                            <LocalLibraryRoundedIcon sx={{ color: '#2676C2', fontSize: '4rem' }} className='UnlockIcon' />
                        </Badge>
                        <div className='Inspire'>
                            <h3>Inspire Learning Journey</h3>
                            <p>Shape learning as a Trainer with <br />
                                sissoo crafting engaging courses.</p>
                        </div>
                    </div>
                </div>
                <div className='RSCarousel'>
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
        </div>
    )
}

export default RoleSelection