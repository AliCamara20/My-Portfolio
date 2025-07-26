import {motion} from 'framer-motion'
import { childrenVariant } from '../Data/animationObjects'
const ProfileImg = (prop: {img: string}) => {
   return(
    <motion.img variants={childrenVariant} 
        initial = {{opacity: 0,  y: 100}}
         whileInView = {{opacity: 1, y: 0}}
         transition={{duration: .5}}
         viewport={{once: true}}
        src={prop.img} alt="" className=' s_img rounded-[10px] 
        sm:max-md: mb-[2rem] sm:max-md: h-70 object-cover 
        md:w-500 md:h-80 sm:max-md: w-full md:max-lg: max-w-[300px] ' 
    />
   )
}
export default ProfileImg