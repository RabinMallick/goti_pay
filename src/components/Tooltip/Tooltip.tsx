'use client'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface TooltipProps {
  text: string
  children: React.ReactNode
  position?: 'top' | 'bottom' | 'left' | 'right'
}

const Tooltip: React.FC<TooltipProps> = ({ text, children, position = 'top' }) => {
  const [show, setShow] = React.useState(false)

  // position classes
  const positionClasses: Record<string, string> = {
    top: '-top-10 left-1/2 -translate-x-1/2',
    bottom: 'top-full mt-2 left-1/2 -translate-x-1/2',
    left: 'right-full mr-2 top-1/2 -translate-y-1/2',
    right: 'left-full ml-2 top-1/2 -translate-y-1/2',
  }

  // arrow (triangle) position
  const arrowClasses: Record<string, string> = {
    top: 'absolute bottom-[-5px] left-1/2 -translate-x-1/2',
    bottom: 'absolute top-[-5px] left-1/2 -translate-x-1/2',
    left: 'absolute right-[-5px] top-1/2 -translate-y-1/2',
    right: 'absolute left-[-5px] top-1/2 -translate-y-1/2',
  }

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`absolute z-50 px-3 py-1 
                       bg-[var(--primary)] text-white text-xs rounded shadow-lg whitespace-nowrap
                       ${positionClasses[position]}`}
          >
            {text}
            <div
              className={`${arrowClasses[position]} w-2 h-2 bg-[var(--primary)] rotate-45`}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Tooltip
