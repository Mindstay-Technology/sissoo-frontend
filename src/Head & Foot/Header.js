import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import HeaderImage from "../Image/LOGO.png";
import "./Header.css"; // Import your CSS file for styling
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Paper from "@mui/material/Paper";
import Favi from "../Image/favi.png"
const Header = () => {
  // State for search bar dropdown
  const [isFocused, setIsFocused] = useState(false);
  const [showNotificationDropdown, setShowNotificationDropdown] =
    useState(false);

  // State for profile dropdown
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  // Sample data for notification messages
  const notificationMessages = [
    "Message 1",
    "Message 2",
    "Message 3",
    "Message 4",
    "Message 4",
    "Message 4",
  ];

  // Sample data for profile dropdown
  const profileOptions = [
    "Option 1",
    "Profile Option 2",
    "Profile Option 3",
    "Profile Option 4",
  ];
  const options = [
    { label: "The Godfather", id: 1 },
    { label: "Godfather", id: 2 },
    { label: "Pulp Fiction", id: 3 },
    { label: " Fiction", id: 4 },
  ];

  return (
    <div className="header">
      {/* Company Logo */}
      <div className="logo">
        <img src={HeaderImage} alt="Company Logo" />
      </div>

      {/* Search Bar */}
      <div>
        <Autocomplete
          disablePortal
          clearIcon={null}
          id="combo-box-demo"
          options={options.slice(0, 3)}
          sx={{
            width: 500,
            "& .MuiAutocomplete-inputRoot": {
              borderRadius: "40px",
              border:"none",
              "&.Mui-focused": {
                borderRadius: "40px 40px 0px 0px",
              },"& .MuiInputLabel-root": {
                display: "none", // Hide the label when focused
              },
            },
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          PaperComponent={({ children }) => (
            <Paper
              elevation={1}
              sx={{
                borderRadius: "0px 0px 40px 40px",
                borderTop: "none",
                border: "2px solid #0056b3",
                color: "#888888",
              }}
            >
              {children}
            </Paper>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label={isFocused ? '' : 'What are you looking for you..........'}
              // sx={{ color:"#888888"}}
              InputProps={{
                ...params.InputProps,

                endAdornment: (
                  <>
                    <SearchIcon
                      style={{
                        cursor: "pointer",
                        marginRight: 8,
                        color: "gray",
                      }}
                      onClick={params.clearable && params.clearValue}
                    />
                    {params.InputProps.endAdornment}
                  </>
                ),
              }}
            />
          )}
        />
      </div>

      {/* Notification Icon */}
      <div
        className="notification-icon"
        onClick={() => setShowNotificationDropdown(!showNotificationDropdown)}
      >
        <span>
          <NotificationsNoneIcon />
        </span>
        {showNotificationDropdown && (
          <div className="notification-dropdown">
            {/* Scrollable area for notification messages */}
            <div className="notification-scroll">
              <div>Notifications</div>
              <hr />
              {notificationMessages.map((message, index) => (
                <div key={index} className="notification-message">
                  {message}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Profile Dropdown */}
      <div
        className="profile"
        onClick={() => setShowProfileDropdown(!showProfileDropdown)}
      >
        <div className="profile-header">
          <img src={Favi} alt="" style={{float:"left", clear:"both"}}/>
          <div>
            <h4>Martin Hook</h4>
            <p>UI UX Developer</p>
          </div>
        </div>
        {showProfileDropdown && (
          <div className="profile-dropdown">
            {/* Dropdown content goes here */}
            {/* <div className="profile-option">Pr.ofile Option 1</div> */}
            <div className="profile-option">
              {profileOptions.map((message, index) => (
                <div key={index} className="profile-list">
                  {message}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
