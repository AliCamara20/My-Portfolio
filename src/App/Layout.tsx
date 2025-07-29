import Header from "../Header/Header"
import Home from "../Home/HomePage"
import About from "../About/AboutPage"
import Skills from "../Skills/SkillsPage"
import Section from "../Sections/OuterSection"
import Projects from "../Projects/ProjectsPage"
import { useRef } from "react"
import { ScrollContext } from "../Header/ScrollContext"
import Contact from "../Contact/Contact"
const Layout = () => {
    const scrollRef = useRef<any>(0);
    const handleScroll: any = (childIndex: number) => {
        scrollRef.current.children[childIndex].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        })
    }

    return (
        <ScrollContext.Provider value={handleScroll}> 
        <div ref={scrollRef}>
        
            <Header /> 
            <div></div>
            <Home />
            <Section>
                <About />     
            </Section>
            <Section>
                <Skills />
            </Section>
            <Section>
                <Projects   />
            </Section>
            <Section>
                <Contact />
            </Section>
        </div> 
         
        </ScrollContext.Provider>
            
    )
}

export default Layout