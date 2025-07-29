import { childrenVariant } from "../Data/animationObjects"
import type{ Image } from "../Data/data"
import {motion} from 'framer-motion'
const Skill = (prop: { image:Image  }) => {
   return (
        <motion.div className="custom_bg  sm:max-md: size-30 md:size-50 
            flex items-center justify-center md:rounded-[2em]
            sm:max-md: mt-5 lg:mt-[5em] sm:max-md: rounded-[1em]"
            variants={childrenVariant}
            initial = {{opacity: 0, y: 100}}
            whileInView={{opacity: 1, y: 0}}    
            transition={{duration: 1, ease: 'easeOut'}}
            viewport={{once: true}}
            
            
        >
            <img key={prop.image.id} src={prop.image.src} 
                className= "sm:max-md: size-20   md:size-40 max-w-full block" 
            />
        </motion.div>
        
    )
}

export default Skill