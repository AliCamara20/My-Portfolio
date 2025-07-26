import Section from "../Sections/Section"
import SectionHeader from "../Sections/SectionHeader"
import Skill from "./SkillImage"
import { skillsPageVariants } from "../Data/animationObjects"
import { images } from "../Data/data"
import {motion} from 'framer-motion'

const Skills = () => {
    const skill_image = images.map( image =>  <Skill key={image.id} image={image} />
    )
    return(
        <Section>
            <SectionHeader headerName="Skills" />
            <motion.div className=" grid sm:msx-md: mt-5 sm:max-md: grid-cols-2 
                md:10 md:max-lg: place-items-center 
                md:max-lg:grid-cols-3 sm:max-md: grid-cols-2   
                lg:grid-cols-4  w-full place-items-center gap-y-1em"
                variants={skillsPageVariants}
                initial = "hidden"
                whileInView = "show"
                viewport={{once: true, amount: 0.5}}

            >
                {skill_image}
            </motion.div>
        </Section>
    )

}

export default Skills