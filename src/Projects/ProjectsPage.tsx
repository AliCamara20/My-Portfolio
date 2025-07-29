import Section from "../Sections/Section"
import SectionHeader from "../Sections/SectionHeader"
import ProjectCard from "./Project"
import { projects } from "../Data/data"
import { motion } from "framer-motion"
import { aboutPageVariants } from "../Data/animationObjects"

const Projects = () => {
    const project = projects.map( pr => <ProjectCard key={pr.id} project={pr}   />)
     return(
        <Section >
            <SectionHeader headerName="Projects" />
            <motion.div variants={aboutPageVariants} 
                className=" mt-20 grid  sm:max-md:grid-cols-1 
                md:max-lg:grid-cols-2  lg:grid-cols-3 gap-[1em] "
            >
                {project}
            </motion.div>
        </Section>
     )
    
    
}

export default Projects