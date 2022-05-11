import React, {useState} from 'react'
import './Navbar.css'
import { Tab, Tabs } from '@mui/material';
import { LocalActivityRounded, HomeRounded, InfoRounded, ContactMailRounded } from '@mui/icons-material';
import { Link , useNavigate } from 'react-router-dom';

function Navbar() {
    let navigate = useNavigate();
    const [tabValue, setTab] = useState(0);
    const handleChange = (event, newValue) => {
        setTab(newValue);
    };

    return (
        <div className='nav-bar'>
            <Tabs value={tabValue} onChange={handleChange} aria-label="icon label tabs example">
                <Tab icon={<HomeRounded color={'primary'} />} label="Home" onClick={ ()=>navigate('/') } />
                <Tab icon={<LocalActivityRounded color={'primary'} />} label="Events" onClick={ ()=>navigate('/events') } />
                <Tab icon={<InfoRounded color={'primary'} />} label="About" onClick={ ()=>navigate('/about') } />
                <Tab icon={<ContactMailRounded color={'primary'} />} label="Contact" onClick={ ()=>navigate('/contact') } />
            </Tabs>
        </div>
    )
}

export default Navbar
