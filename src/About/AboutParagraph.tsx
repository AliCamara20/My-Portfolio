import {motion} from 'framer-motion'
import { childrenVariant } from '../Data/animationObjects'
const AboutText = () => {
    return(
        <motion.p  className='sm:max-md: text-[1.123rem] md:text-[1.3rem] 
            md:ml-10'
            variants={childrenVariant}
            initial = {{opacity: 0, y: 140,}} 
            whileInView ={{opacity: 1, y: 0}}
            transition={{duration: .5}}
            viewport={{once: true}}
            
        >
            My name is Alieu Camara. I’m a dedicated front-end web developer 
            specializing in creating responsive, visually appealing, and 
            user-friendly websites. With expertise in HTML, CSS, JavaScript, 
            and experience with React, I bring ideas to life with clean code 
            and attention to detail. I’m proficient in Git for efficient
            version control and collaboration. Whether you need a sleek 
            business site, a landing page, or custom web functionality, 
            I’m here to deliver high-quality results that exceed your 
            expectations. Let’s work together to make your vision a reality!
        </motion.p>
    )
}

export default AboutText