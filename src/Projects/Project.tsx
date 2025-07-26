import type{Project } from "../Data/data"
import { motion } from "framer-motion"
import { childrenVariant } from "../Data/animationObjects"
import ProjectDescription from "./ProjectDesc"
import ProjectImage from "./ProjectImage"


 interface ProjectCardProp{
    project: Project,
    
 }
const ProjectCard = (prop:ProjectCardProp) => {
    return(
        <motion.div className ="custom_bg p-[.9em]  rounded-[16px]"
            variants={childrenVariant}
            initial = {{opacity: 0, y: 100}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1, ease: "easeInOut"}}
            viewport={{once: true}}
        >
            <motion.div className="grid place-items-center  w-full  
            border-solid  relative cursor-pointer rounded-[3px]
            grid-cols"
            
        >
            <ProjectImage link={prop.project.siteLink} src={prop.project.image} />
            <ProjectDescription 
                gitRepoLink={prop.project.gitRepoLink} 
                siteLink={prop.project.siteLink}  
                projectName={prop.project.name}
                description={prop.project.description} 
                projectTools={prop.project.tools}

            />
            </motion.div>
        </motion.div>
        
    )
}

export default ProjectCard