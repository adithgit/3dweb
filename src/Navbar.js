import React, {useState} from 'react'
import './Navbar.css'
import { Tab, Tabs } from '@mui/material';
import { LocalActivityRounded, HomeRounded, InfoRounded, ContactMailRounded } from '@mui/icons-material';
import {  useNavigate } from 'react-router-dom';
import { motion } from "framer-motion"

function Navbar() {
    let navigate = useNavigate();
    const [tabValue, setTab] = useState(0);
    const handleChange = (event, newValue) => {
        setTab(newValue);
    };

    
    return (
        <div className='nav-bar'>
            <Tabs value={tabValue} onChange={handleChange} aria-label="icon label tabs example">
                <Tab icon={  <motion.div whileHover={{scale: 1.5}} whileTap={{scale: 0.8}}> <HomeRounded color={'primary'}  /> </motion.div> } label="Home" onClick={ ()=>navigate('/') } />
                <Tab icon={ <motion.div whileHover={{scale: 1.5}} whileTap={{scale: 0.8}}> <LocalActivityRounded color={'primary'} /> </motion.div> } label="Events" onClick={ ()=>navigate('/events') } />
                <Tab icon={ <motion.div whileHover={{scale: 1.5}} whileTap={{scale: 0.8}}> <InfoRounded color={'primary'} /> </motion.div> } label="About" onClick={ ()=>navigate('/about') } />
                <Tab icon={ <motion.div whileHover={{scale: 1.5}} whileTap={{scale: 0.8}}> <ContactMailRounded color={'primary'} /> </motion.div> } label="Contact" onClick={ ()=>navigate('/contact') } />
            </Tabs>
        </div>
    )
}

export default Navbar
