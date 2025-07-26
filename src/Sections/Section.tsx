import type React from "react";

const Section = (prop: {children: React.ReactNode}) => {
  return(
    <section className="sm:max-md: px-[2rem] md:px-[7rem]">{prop.children}</section>
  )
}

export default Section