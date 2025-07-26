import { faGithub } from "@fortawesome/free-brands-svg-icons";
import GithubSiteLink from "./GithubSiteLink";
import ProjectTool from "./ProjectTool";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

interface ProjectDescProp{
 projectName: string,
 siteLink: string,
 gitRepoLink: string,
 description: string
 projectTools: string[];
}
const ProjectDescription = (prop: ProjectDescProp) => {
    const tool = prop.projectTools.map( (tool ,index) => <ProjectTool img={tool} key={index} /> )
  return(
    <div className="pr_desc w-full   p-[1em] rounded-b-[10px] ">
        <h2 className="text-xl font-semibold mb-[.5em]">{prop.projectName}</h2>
        <p className="text-md text-gray-300 w-full">{prop.description}</p>
        <div className=""
        >

            <div className="flex w-full gap-x-[.7em] my-[1em]  ">
                {tool}
            </div>
            <div className=" w-full my-[1em] flex md:justify-between
                gap-x-[1em] sm:max-md: flex-col md:flex-row ">
                <div className=" link py-[.8em] px-[.7em] rounded-[.3em] text-sm flex
                    gap-x-[.5em] border-solid border-white border-2 mb-[1em] 
                    sm:max-md: w-full md:w-1/2"
                >
                    <GithubSiteLink href={prop.siteLink} icon={faSearch} />
                    <p className="text-[1rem]">Preview</p>
                </div>
                <div className=" link flex py-[.8em] px-[.7em] rounded-[.3em] text-sm 
                    gap-x-[.5em] border-solid border-white border-2 mb-[1em] 
                    sm:max-md: w-full md:w-1/2 "
                >
                    <GithubSiteLink href= {prop.gitRepoLink} icon={faGithub} />
                    <p className="text-[1rem]">Github repo</p>
                </div>
            </div>
        </div>
     
    </div>
  )
}

export default ProjectDescription