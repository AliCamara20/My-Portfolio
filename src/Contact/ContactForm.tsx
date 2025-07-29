import { childrenVariant } from "../Data/animationObjects"
import FormInput from "./FormInput"
import {motion} from 'framer-motion'

const ContactForm = () => {
    return(
        
        <motion.form action="" 
            variants={childrenVariant}
            initial = {{opacity: 0, x: 500}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 1}}
            viewport={{once: true}}
        >
            <div className="md:flex gap-x-[1em]">
                <FormInput type="text" placeholder="Name" />
                <FormInput type="email" placeholder="Email" />
            </div>
            <textarea name="" id="" placeholder="Write a message" className="
                custom_bg w-full  
                rounded-[.2em] mt-5 p-[1em] min-h-[300px]
                sm:max-md: text-[1.123rem] md:text-[1.3rem] 
                font-[Open Sans] outline-none placeholder:text-white">

            </textarea>
            <input type="submit" value="Send message" 
                className="custom_bg sm:max-md: text-[1.123rem] md:text-[1.3rem] 
                w-full mt-5 mb-[2em] p-[.5em] rounded-[.2em] " 
            />
            
        </motion.form>
        
    )
}

export default ContactForm