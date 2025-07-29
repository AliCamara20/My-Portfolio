import {  faLocation, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { childrenVariant } from "../Data/animationObjects"
import {motion} from 'framer-motion'
import type React from "react"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"


const ContactInfo = () => {
    return(
        <motion.div
            variants={childrenVariant}
            
            
        >
            <Info  label="+220 5859303" >
                <FontAwesomeIcon icon={faPhone} size="2x" color="hsl(219, 57%, 20%)" />
            </Info>
            <Info label="Brikama Jamisa" >
                <FontAwesomeIcon icon={faLocation}  size="2x" color="hsl(219, 57%, 20%)" />      
            </Info>
            <Info label="alicamara2043@gmail.com" >
                <FontAwesomeIcon icon={faEnvelope} size="2x" color="hsl(219, 57%, 20%)" />
            </Info>
        </motion.div>
    )
}

const Info = (prop: {children: React.ReactNode, label: string}) => {
    return(
        <motion.div className="flex gap-[1em] mb-[2em]"
            initial ={{opacity:0, y: 200}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1}}
            viewport={{once: true, margin: '300px'}}
        >
            {prop.children}
            <p className="sm:max-md: text-[1.123rem] md:text-[1.3rem] font-[Open Sans]">{prop.label}</p>
        </motion.div>
    )
}

export default ContactInfo