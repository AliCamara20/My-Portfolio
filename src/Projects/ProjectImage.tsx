
const ProjectImage  = (prop: {link: string, src: string}) => {
    return(
        <a className="block " href={prop.link} >
            <img src={prop.src} alt="" className="object-cover  h-50 rounded-t-[10px]" />
        </a>
    )
}

export default ProjectImage