import { useContext } from 'react';
import Navlink from './Navlink'
import { ScrollContext } from './ScrollContext';
import { motion } from 'framer-motion';
import { childrenVariant } from '../Data/animationObjects';

const Navbar = ( prop:{isActive: boolean} ) => {
   
  
   const scrollableContext  = useContext<any>(ScrollContext)

   return (
      <motion.nav className={  `
         ${prop.isActive ? "sm:max-md: block  " : "sm:max-md: hidden"}  
         text-sky-900 bg-white w-full sm:max-md: absolute 
         sm:max-md: top-20 md:w-1/2 md:static md:block 
         
         `}
         variants={childrenVariant}
         initial = {{opacity: 0, scale: .7}}
         animate = {{opacity: 1, scale: 1}}
         transition={{duration: 2}}
      >
        <div className={` sm:block  md:flex md:justify-between font-semibold text-sky-800 font-[Open Sans] m-0 p-0  `} >
           <Navlink  label='Home'  onScroll={() => scrollableContext(2)}/>
           <Navlink label='About'  onScroll={() => scrollableContext(3) }/>
           <Navlink label='Skills'  onScroll={() => scrollableContext(4)} />
           <Navlink label='Projects'onScroll={() => scrollableContext(5)} />
           <Navlink  label='Contact'onScroll={() => scrollableContext(6)}/>
        </div> 
      </motion.nav>
   )
 
}

export default Navbar