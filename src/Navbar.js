import React, {useState} from 'react'
import './Navbar.css'
import { Tab, Tabs } from '@mui/material';
import { LocalActivityRounded, HomeRounded, InfoRounded, ContactMailRounded } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Navbar() {

    const [tabValue, setTab] = useState(0);
    const handleChange = (event, newValue) => {
        setTab(newValue);
    };
    return (
        <div className='nav-bar'>
            <Tabs value={tabValue} onChange={handleChange} aria-label="icon label tabs example">
                <Tab icon={<HomeRounded color={'primary'} />} label="Home" />
                <Tab icon={<LocalActivityRounded color={'primary'} />} label="Events" />
                <Tab icon={<InfoRounded color={'primary'} />} label="About" />
                <Tab icon={<ContactMailRounded color={'primary'} />} label="Contact" />
            </Tabs>
        </div>
    )
}

export default Navbar
