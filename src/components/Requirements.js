import React, { useState } from 'react';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import "./Requirements.css";

const Requirements = () => {
    const [activeOption, setActiveOption] = useState('postTraining');
    const [trainingType, setTrainingType] = useState('');
    const [participantCount, setParticipantCount] = useState(0);
    const [trainingMode, setTrainingMode] = useState('online');
    const [, setSelectedLocation] = useState('');
    const [experience, setExperience] = useState([0]);
    const [durationType, setDurationType] = useState('hour');
    const [durationCount, setDurationCount] = useState(0);

    const handleOptionClick = (option) => {
        setActiveOption(option);
    };

    const handleTrainingTypeChange = (type) => {
        setTrainingType(type);
        setParticipantCount(0);
        setDurationCount(0);
    };

    const TopTopics = [
        { title: 'Photoshop' },
        { title: 'illustrator' },
        { title: 'JEE' },
        { title: 'HTML' },
        { title: 'CSS3' },
        { title: 'Mindstay' },
        { title: 'One In A billion' }
    ];

    const handleTrainingModeChange = (mode) => {
        setTrainingMode(mode);
    };

    const handleLocationChange = (location) => {
        setSelectedLocation(location);
    };

    const handleExperienceChange = (event, newValue) => {
        setExperience(newValue);
    }

    const handleDurationTypeChange = (type) => {
        setDurationType(type);
        setDurationCount(0);
    };

    return (
        <div className='Requirements'>
            <div className='BreadCrumbs'>
                <span className='Dashboard'> Dashboard</span>
                <span className='Require'> {' > Requirements > '}</span>
                <span className='Post_TJ'>{activeOption === 'postTraining' ? 'Post Training' : 'Post Job'}</span>
            </div>

            <div className='Post_Buttons'>
                <button
                    onClick={() => handleOptionClick('postTraining')}
                    style={{ marginRight: '10px' }}
                    className='Post_T'
                >
                    Post Training
                </button>
                <button onClick={() => handleOptionClick('postJob')} className='Post_J'>Post Job</button>
            </div>

            <div className='Buttons_Content'>
                {activeOption === 'postTraining' && (
                    <div className='Post_Training_content'>
                        <div className='Company'>
                            <p>Company Name</p>
                            <input type="text" placeholder='Company Name / Organization Name / College Name' />
                        </div>
                        <div className='Technology'>
                            <p>Technology (Training topics)</p>
                            <Autocomplete
                                multiple
                                id="fixed-tags-demo"
                                options={TopTopics}
                                getOptionLabel={(option) => option.title}
                                renderTags={(tagValue, getTagProps) =>
                                    tagValue.map((option, index) => (
                                        <Chip
                                            label={option.title}
                                            {...getTagProps({ index })}
                                            sx={{
                                                color: 'rgba(138, 138, 138, 0.50)',
                                                fontFamily: 'Poppins',
                                                fontSize: '0.825rem',
                                                fontStyle: 'normal',
                                                fontWeight: '400',
                                                lineHeight: 'normal',
                                                background: 'rgba(138, 138, 138, 0.20)'
                                            }}
                                        />
                                    ))
                                }
                                className='Multi_S_I'
                                renderInput={(params) => (
                                    <TextField {...params} />
                                )}
                            />
                        </div>
                        <div className='Type_Of_Training'>
                            <p>Type Of Training</p>
                            <div className='RadioTOT'>
                                <label>
                                    <input
                                        type="radio"
                                        name="trainingType"
                                        value="Corporate Training"
                                        checked={trainingType === 'Corporate Training'}
                                        onChange={() => handleTrainingTypeChange('Corporate Training')}
                                    />
                                    Corporate Training
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="trainingType"
                                        value="College Training"
                                        checked={trainingType === 'College Training'}
                                        onChange={() => handleTrainingTypeChange('College Training')}
                                    />
                                    College training
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="trainingType"
                                        value="Individual"
                                        checked={trainingType === 'Individual'}
                                        onChange={() => handleTrainingTypeChange('Individual')}
                                    />
                                    Individual
                                </label>
                            </div>
                            {trainingType === 'Corporate Training' && (
                                <div className="ParticipantCount">
                                    <h5>Select No Of Participants In Corporate Training</h5>
                                    <div className='RadioTOT_Count'>
                                        <button onClick={() => setParticipantCount(participantCount - 1)}>-</button>
                                        <span >{participantCount} Participants </span>
                                        <button onClick={() => setParticipantCount(participantCount + 1)}>+</button>
                                    </div>
                                </div>
                            )}
                            {trainingType === 'College Training' && (
                                <div className="ParticipantCount">
                                    <h5>Select No Of Participants In College Training</h5>
                                    <div className='RadioTOT_Count'>
                                        <button onClick={() => setParticipantCount(participantCount - 1)}>-</button>
                                        <span >{participantCount} Participants </span>
                                        <button onClick={() => setParticipantCount(participantCount + 1)}>+</button>
                                    </div>
                                </div>
                            )}
                            {trainingType === 'Individual' && (
                                <div className="ParticipantCount">
                                    <h5>Select No Of Participants In Individual</h5>
                                    <div className='RadioTOT_Count'>
                                        <button onClick={() => setParticipantCount(participantCount - 1)}>-</button>
                                        <span >{participantCount} Participants </span>
                                        <button onClick={() => setParticipantCount(participantCount + 1)}>+</button>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className='Mode_Of_Training'>
                            <p>Mode Of Training</p>
                            <div className='Radio_MOT'>
                                <label>
                                    <input
                                        type="radio"
                                        name="trainingMode"
                                        value="online"
                                        checked={trainingMode === 'online'}
                                        onChange={() => handleTrainingModeChange('online')}
                                    />
                                    Online
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="trainingMode"
                                        value="offline"
                                        checked={trainingMode === 'offline'}
                                        onChange={() => handleTrainingModeChange('offline')}
                                    />
                                    Offline
                                </label>
                            </div>
                            {trainingMode === 'offline' && (
                                <div className="SelectLocation">
                                    <label><h5>Your Location</h5></label>
                                    <select onChange={(e) => handleLocationChange(e.target.value)}>
                                        <option value="">Location</option>
                                        <option value="usa">United States</option>
                                        <option value="canada">Canada</option>
                                        <option value="uk">United Kingdom</option>
                                        <option value="australia">Australia</option>
                                    </select>
                                </div>
                            )}
                        </div>
                        <div className='Select_Experience'>
                            <p>Select Experience</p>
                            <h5>Slide To Set Your Experience</h5>
                            <Box sx={{ width:"40rem", marginTop: '3rem' }}>
                                <Slider
                                    value={experience}
                                    onChange={handleExperienceChange}
                                    min={0}
                                    max={50}
                                    aria-label="Experience Range"
                                    valueLabelDisplay="auto"
                                    valueLabelFormat={(value) => `${value} years`}
                                    sx={{
                                        '& .MuiSlider-valueLabel': {
                                            background: '#FFF',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            color: '#2676C2',
                                            fontFamily: 'Poppins',
                                            fontSize: '0.855rem',
                                            fontStyle: 'normal',
                                            fontWeight: 'bold',
                                            lineHeight: 'normal',
                                            border: '2px solid #2676C2',
                                        }
                                    }}
                                />
                            </Box>
                        </div>
                        <div className='Duration_Of_Time'>
                            <p>Duration Of Time</p>
                            <div className='Radio_Duration'>
                                <label>
                                    <input
                                        type="radio"
                                        name="durationType"
                                        value="hour"
                                        checked={durationType === 'hour'}
                                        onChange={() => handleDurationTypeChange('hour')}
                                    />
                                    Hour
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="durationType"
                                        value="day"
                                        checked={durationType === 'day'}
                                        onChange={() => handleDurationTypeChange('day')}
                                    />
                                    Day
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="durationType"
                                        value="month"
                                        checked={durationType === 'month'}
                                        onChange={() => handleDurationTypeChange('month')}
                                    />
                                    Month
                                </label>
                            </div>
                            {durationType === 'hour' && (
                                <div className="DurationCount">
                                    <h5>Select No Of Hours</h5>
                                    <div className='Radio_Duration_Count'>
                                        <button onClick={() => setDurationCount(durationCount - 1)}>-</button>
                                        <span >{durationCount} Hour </span>
                                        <button onClick={() => setDurationCount(durationCount + 1)}>+</button>
                                    </div>
                                </div>
                            )}
                            {durationType === 'day' && (
                                <div className="DurationCount">
                                    <h5>Select No Of Days</h5>
                                    <div className='Radio_Duration_Count'>
                                        <button onClick={() => setDurationCount(durationCount - 1)}>-</button>
                                        <span >{durationCount} Days </span>
                                        <button onClick={() => setDurationCount(durationCount + 1)}>+</button>
                                    </div>
                                </div>
                            )}
                            {durationType === 'month' && (
                                <div className="DurationCount">
                                    <h5>Select No Of Months</h5>
                                    <div className='Radio_Duration_Count'>
                                        <button onClick={() => setDurationCount(durationCount - 1)}>-</button>
                                        <span >{durationCount} Months </span>
                                        <button onClick={() => setDurationCount(durationCount + 1)}>+</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {activeOption === 'postJob' && (
                    <div className='Post_Job_Content'>
                        {/* Content for Post Job */}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Requirements;
