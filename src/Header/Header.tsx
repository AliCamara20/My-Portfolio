import { useState } from "react"
import Navbar from "./Navbar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { motion } from "framer-motion"
import { childrenVariant } from "../Data/animationObjects"

const Header = () => {
    const [isActive, setIsActive] = useState(false);
    return (
        <motion.header 
            className="
            bg-white sm:max-md: px-[2rem] md:px-[7rem] py-[1em] w-screen fixed 
            top-0 -left-0 flex items-baseline justify-between z-100
            h-auto"
        >
            <motion.a className="text-sky-900 md:text-[2.5rem] 
                sm:max-md: text-[2rem] font-bold block font-[cursive] 
                cursor-pointer text-lg w-1/2"
                variants={childrenVariant}
                initial = {{opacity: 0}}
                animate = {{opacity: 1}}
            >
            Ali
            </motion.a>
            <Navbar isActive = {isActive}  />
            <div className='w-1/2 flex justify-end md:hidden  cursor-pointer' onClick={() => setIsActive(!isActive)}>
                {isActive ?
                    <FontAwesomeIcon icon={faXmark}  size="2x" color="#00598a" /> :
                    <FontAwesomeIcon icon={faBars}  size="2x" color="#00598a"/>    
                }
            </div>
        </motion.header>
    )
}

export default Header