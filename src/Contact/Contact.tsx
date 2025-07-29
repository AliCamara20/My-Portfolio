import ContactForm from "./ContactForm"
import ContactInfo from "./ContactInfo"
import Section from "../Sections/Section"
import SectionHeader from "../Sections/SectionHeader"
import {motion} from 'framer-motion'

const Contact = () => {
    return(
        <Section>
            <SectionHeader headerName="Contact" />
            <motion.div className="md:flex md:justify-between md:items-center 
                w-full mt-[5rem] gap-x-[1em] overflow-hidden"
            >
                <ContactInfo />
                <ContactForm />
            </motion.div>
        </Section>
    )
}

export default Contact