import React from 'react'
import { motion } from 'framer-motion'
import Backdrop from '../Backdrop/Backdrop'
import Details from './Details'
import { Button } from '@mui/material'
import '../../events.css'
function Modal({ handleClose, text, eventDetails }) {

    const dropIn = {
        hidden: {
            y: '-100vh',
            opacity: 0
        },
        visible: {
            y: "0",
            opacity: 1,
            transition: {
                duration: 0.1,
                type: "spring",
                damping: 25,
                stiffness: 500,
            }
        },
        exit: {
            y: "100vh",
            opacity: 0
        }
    }
    return (
        <div className='main-backdrop'>

            <Backdrop onClick={handleClose}>
            </Backdrop>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className="modal"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <Button variant="contained"  id='close-button' color="error" onClick={ handleClose }>
                    X
                </Button>
                <div className="event-poster">
                    <img src={ eventDetails.posterLink } alt="" />
                </div>
                <Details eventDetails = { eventDetails } />
            </motion.div>
        </div>
    )
}

export default Modal