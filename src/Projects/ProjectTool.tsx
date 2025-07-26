const ProjectTool = (prop: {img: string}) => {
    return(
        <div className="p_desc flex py-[.5em]  rounded-[.3em] text-sm 
            font-bold w-full max-w-[95px] justify-center items-center
            border-solid border-1 ">
                <img src={prop.img} alt="" className="size-8" />   
        </div>
    )
    
}

export default ProjectTool