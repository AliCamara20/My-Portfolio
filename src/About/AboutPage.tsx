import Section from '../Sections/Section'
import SectionHeader from '../Sections/SectionHeader'
import ProfileImg from './ProfileImage'
import about_img from "../assets/Profile2-removebg-preview (1).png"
import {motion} from 'framer-motion'
import AboutText from './AboutParagraph'
import { aboutPageVariants} from '../Data/animationObjects'

const About = () => {
    return(
            <Section>
                <SectionHeader headerName='About me' />
                <motion.div className='mt-20 flex sm:max-md: flex-col 
                md:max-lg: flex-col  lg:flex-row items-center justify-start'
                    variants={aboutPageVariants}
                    initial = "hidden"
                    animate = "show"
                    
                >
                    <ProfileImg img={about_img} />
                    <AboutText />
                </motion.div>
            </Section>
        

    )
}

export default About