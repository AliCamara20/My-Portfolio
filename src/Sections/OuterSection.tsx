import type React from "react"

const Section = (prop: {children: React.ReactNode}) => {
    return <section className="mt-20">{prop.children}</section>
}

export default Section