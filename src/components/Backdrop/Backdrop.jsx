import React from 'react'
import { motion } from 'framer-motion'

function Backdrop({children, onClick}) {
  return (
      <motion.div
      className="backdrop"
      onClick={onClick}
      intial={{ onpacity: 0}}
      animate={{ onpacity: 1}}
      exit={{ onpacity: 0}}
      >
      {children}
      </motion.div>
  )
}

export default Backdrop