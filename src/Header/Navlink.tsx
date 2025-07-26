import type React from "react"
import { motion } from "framer-motion"
interface NavlinkProp{
    label: string, 
    onScroll: ( n?: number) => void
}
const Navlink = (prop: NavlinkProp) => {
    return <motion.a className="block relative sm:max-d: my-4 sm:max-md: py-[.5em]  
                cursor-pointer w-fit after:absolute after:bottom-0 after:left-0
                after:content-[''] after:w-0 after:h-1 after:rounded-full  
                after:bg-sky-900 hover:after:w-full after:transition-[width]
                after:duration-0.5"
                onClick={ e => {
                    e.preventDefault();
                    prop.onScroll();
                }}
                initial = {{opacity: 0, scale: .8}}
                animate = {{opacity: 2, scale: 1}}
                transition={{duration: 2}}
                viewport={{once: true}}

            >{prop.label}
            </motion.a>
}
export default Navlink