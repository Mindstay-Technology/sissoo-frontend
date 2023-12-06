import React from 'react';
import LanguageRounded from '@mui/icons-material/LanguageRounded';
import HelpOutlineRounded from '@mui/icons-material/HelpOutlineRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { Badge } from '@mui/material';
import './RoleSelection.css';
import './Employee.css';
import LOGO from '../images/Header_Logo_RS.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setFullName, setCompanyName, setDesignation } from '../Redux/Slice/AuthSlice';
import { useDispatch, useSelector } from 'react-redux';
const SkillsSet = () => {
  // const [fullName, setFullName] = useState('');
  // const [companyName, setCompanyName] = useState('');
  // const [designation, setDesignation] = useState('');
  const dispatch = useDispatch()
  const { fullName, companyName, designation } = useSelector((state)=>state.auth)
  const selectrole = useNavigate()
  const handleSignIn = () => {
    // Handle sign-in logic here
    console.log('Full Name:', fullName);
    console.log('Company Name:', companyName);
    console.log('Designation:', designation);
    // Add your sign-in logic here
    dispatch(setFullName(''))
    dispatch(setCompanyName(''))
    dispatch(setDesignation(''))
  };

  return (
    <div className='Employee'>
      <div className='Emp_Head'>
        <img src={LOGO} alt='Header_Logo' />
        <div className='Help'>
          <HelpOutlineRounded sx={{ color: '#FFF', fontSize: '2rem' }} />
          <div className='Language'>
            <Badge className='LIcon'>
              <LanguageRounded sx={{ color: '#FFF', fontSize: '2rem' }} />
              <select name='English' id='RSEnglish' placeholder='English'>
                <option value=''>English</option>
                <option value=''>Hindi</option>
                <option value=''>Kannada</option>
                <option value=''>Marathi</option>
                <option value=''>Tamil</option>
                <option value=''>Telugu</option>
                <option value=''>Malayalam</option>
              </select>
            </Badge>
          </div>
        </div>
      </div>
      <div className='Emp_Details'>
        <div className='Details'>
          <ArrowBackRoundedIcon sx={{ color: ' #2676C2;', fontSize: '2.3rem', paddingRight: '36rem' }}  onClick={()=>{ selectrole('/selectrole')}} />
          <h1 style={{margin:'0%' }}>
            Trainer's Gateway :
          </h1>
          <h1 style={{margin:'0%', background:'#2676C2', color:'#FFF', paddingLeft:'0.3rem', paddingRight:'0.3rem'}}>Craft,Inspire,Elevate</h1>
        </div>
        <div className='Fill_Details'>
          <form>
            <label>
              Full Name
              <input type='text' value={fullName} onChange={(e) => dispatch(setFullName(e.target.value))} placeholder='Enter Full name'/>
            </label>

            <label>
              Experience
              <input type='text' value={companyName} onChange={(e) => dispatch(setCompanyName(e.target.value))} placeholder='Select Your Experience Level'/>
            </label>

            <label>
              Skill Set
              <input type='text' value={designation} onChange={(e) => dispatch(setDesignation(e.target.value))} placeholder='Enter Your Role'/>
            </label>

            <button type='button' onClick={handleSignIn}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SkillsSet;
