import React, {useState} from 'react'
import { useSpring, useSprings, animated, interpolate } from 'react-spring'
import "./events.css"
import { motion, AnimatePresence } from 'framer-motion'
import Modal from './components/Modal/Modal';
import { FilledInput } from '@mui/material';

function Event({  background, eventDetails }) {
    const [modalOpen, setModelOpen ] = useState(null);

    const toggleModal = () => setModelOpen(!modalOpen);
    
  const [open, setOpen] = useState(false)
  const { f, r } = useSpring({ f: open ? 0 : 1, r: open ? -3 : 3 })
  const cards = useSprings(5, [0, 1, 2, 3, 4].map(i => ({ opacity: 0.2 + i / 5, z: open ? (i / 5) * 80 : 0 })))
  return (
    <div class="container" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <AnimatePresence
      initial={ false }
      exitBeforeEnter={ true }
      onExitComplete={ () => null }
      >

      {
        eventDetails.label ? <motion.button whileHover={{ scale: 1.1 }}   whileTap={{ scale:0.9 }}  id='event-button'  >
             {eventDetails.label}
        </motion.button>: 
        <motion.button whileHover={{ scale: 1.1 }}   whileTap={{ scale:0.9 }}  id='event-button' onClick={ toggleModal } >
             REGISTER
        </motion.button>
      }
      { modalOpen && <Modal modalOpen={ modalOpen } handleClose={toggleModal} eventDetails = { eventDetails } />}

      </AnimatePresence>

      {cards.map(({ z, opacity }, index) => (
        <animated.div
          style={{
            opacity,
            background,
            transform: interpolate(
              [z, f.interpolate([0, 0.2, 0.6, 1], [0, index, index, 0]), r],
              (z, f, r) => `translate3d(0,0,${z}px) rotateX(${f * r}deg)`
            )
          }}>
          {index === 4 && <animated.img style={{ width:'100%', transform: f.interpolate([0, 1], ['scale(0.7)', 'scale(1)']) }} src={ eventDetails.posterLink } />}
        </animated.div>
      ))}
    </div>
  )
}

export default Event