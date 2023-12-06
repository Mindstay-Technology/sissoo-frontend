import React, { useState } from 'react';
import './Dashboard.css'; // Import your CSS file for styling
import GridViewIcon from '@mui/icons-material/GridView';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ListIcon from '@mui/icons-material/List';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
const DashboardApp = () => {
  const [selectedOption, setSelectedOption] = useState('dashboard');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="dashboard-app">
      {/* Left Side Navbar */}
      <div className="sidebar">
        <div
          
          className={`sidebar-option ${selectedOption === 'Dashboard' && 'active'}`}
          onClick={() => handleOptionClick('Dashboard')}
        >
          <GridViewIcon sx={{marginRight:"10px"}}/>
          Dashboard
          <ArrowForwardIosOutlinedIcon className="arrow-icon" />
        </div>
        <div
          className={`sidebar-option ${selectedOption === 'Trainers List' && 'active'}`}
          onClick={() => handleOptionClick('Trainers List')}
        >
          <ListIcon sx={{marginRight:"10px"}}/>
          Trainers List
          <ArrowForwardIosOutlinedIcon className="arrow-icon" />
        </div>
        <div
          className={`sidebar-option ${selectedOption === 'Post a Requirements' && 'active'}`}
          onClick={() => handleOptionClick('Post a Requirements')}
        >
          <RateReviewOutlinedIcon sx={{marginRight:"10px"}}/>
          Post a Requirements
          <ArrowForwardIosOutlinedIcon className="arrow-icon" />
        </div>
        <div
          className={`sidebar-option ${selectedOption === "My Training Program's" && 'active'}`}
          onClick={() => handleOptionClick("My Training Program's")}
        >
          My Training Program's
          <ArrowForwardIosOutlinedIcon className="arrow-icon" />
        </div>
        <div
          className={`sidebar-option ${selectedOption === 'Trainers Directory' && 'active'}`}
          onClick={() => handleOptionClick('Trainers Directory')}
        >
          Trainers Directory
          <ArrowForwardIosOutlinedIcon className="arrow-icon" />
        </div>
        <div
          className={`sidebar-option ${selectedOption === 'Messages' && 'active'}`}
          onClick={() => handleOptionClick('Messages')}
        >
          Messages
          <ArrowForwardIosOutlinedIcon className="arrow-icon" />
        </div>
        <div
          className={`sidebar-option ${selectedOption === 'Proposal Management' && 'active'}`}
          onClick={() => handleOptionClick('Proposal Management')}
        >
          Proposal Management
          <ArrowForwardIosOutlinedIcon className="arrow-icon" />
        </div>
        <div
          className={`sidebar-option ${selectedOption === 'Settings' && 'active'}`}
          onClick={() => handleOptionClick('Settings')}
        >
          Settings
          <ArrowForwardIosOutlinedIcon className="arrow-icon" />
        </div>
        <div
          className={`sidebar-option ${selectedOption === 'Billings & Payments' && 'active'}`}
          onClick={() => handleOptionClick('Billings & Payments')}
        >
          Billings & Payments
          <ArrowForwardIosOutlinedIcon className="arrow-icon" />
        </div>
        <div
          className={`sidebar-option ${selectedOption === 'Training Analytics' && 'active'}`}
          onClick={() => handleOptionClick('Training Analytics')}
        >
          Training Analytics
          <ArrowForwardIosOutlinedIcon className="arrow-icon" />
        </div>
        <div
          className={`sidebar-option ${selectedOption === 'Training Resource' && 'active'}`}
          onClick={() => handleOptionClick('Training Resource')}
        >
          Training Resource
          <ArrowForwardIosOutlinedIcon className="arrow-icon" />
        </div>
        <div
          className={`sidebar-option ${selectedOption === 'Help Support' && 'active'}`}
          onClick={() => handleOptionClick('Help Support')}
        >
          Help Support
          <ArrowForwardIosOutlinedIcon className="arrow-icon" />
        </div>
        <div
          className={`sidebar-option ${selectedOption === 'Privacy & Security' && 'active'}`}
          onClick={() => handleOptionClick('Privacy & Security')}
        >
          Privacy & Security
          <ArrowForwardIosOutlinedIcon className="arrow-icon" />
        </div>
        
      </div>

      {/* Right Side Content Area */}
      <div> HOME <ArrowForwardIosOutlinedIcon/>{selectedOption}</div>
      <div className="content">
        {selectedOption === 'Dashboard' && <div>Dashboard Content Goes Here</div>}
        {selectedOption === 'Trainers List' && <div>Trainers List Content Goes Here</div>}
        {selectedOption === 'Post a Requirements' && <div>Job Posting Content Goes Here</div>}
        {selectedOption === "My Training Program's" && <div>My Training Program's Content Goes Here</div>}
        {selectedOption === 'Trainers Directory' && <div>Trainers Directory Content Goes Here</div>}
        {selectedOption === 'Messages' && <div>Messages Content Goes Here</div>}
        {selectedOption === 'Proposal Management' && <div>Proposal Management Content Goes Here</div>}
        {selectedOption === 'Settings' && <div>Settings Content Goes Here</div>}
        {selectedOption === 'Billings & Payments' && <div>Billings & Payments Content Goes Here</div>}
        {selectedOption === 'Training Analytics' && <div>Training Analytics Content Goes Here</div>}
        {selectedOption === 'Training Resource' && <div>Training Resource Content Goes Here</div>}
        {selectedOption === 'Help Support' && <div>Help Support Content Goes Here</div>}
        {selectedOption === 'Privacy & Security' && <div>Privacy & Security Content Goes Here</div>}
      </div>
    </div>
  );
};

export default DashboardApp;
