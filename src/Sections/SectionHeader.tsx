const SectionHeader = (prop: {headerName: string}) => {

  return (
    <h1 className=" relative uppercase text-sky-900 text-center   
        w-fit mx-auto text-sm font-bold text-[1.5rem] after:absolute
        after:content-[''] after:w-full after:h-[5px] after:bg-[#10203c] 
        after:rounded-full after:-bottom-[10px] after:left-0 "
    >
    {prop.headerName}
    </h1>
  )
}

export default SectionHeader