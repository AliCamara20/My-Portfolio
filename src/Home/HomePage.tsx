import { childrenVariant, homePageVariants } from '../Data/animationObjects'
import heroImg from '../assets/Profile2-removebg-preview (1).png'
import {motion} from 'framer-motion'
const Home = () => {
    return(
        <motion.div className="sm:max-md: mt-40 sm:max-md: mb-40  md:mt-40 
            sm:max-md: px-[2rem] md:px-[7rem] flex sm:max-md: flex-col 
            md:flex-row md: items-center overflow-hidden"
            variants={homePageVariants}
            initial = "hidden"
            whileInView= "show"
            viewport={{once: true}}
        >
            <motion.div className=" md:w-3/4 md:text-[1.7rem] sm:max-md: text-[1.5123rem] 
                font-[Open Sans] sm:max-md: order-last md:order-first md:w-2/4 
                md:mr-10"
                variants={childrenVariant}
                initial ={{opacity: 0, x: -300}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 1.5}}
                viewport={{once: true}}
                
            >
                <h2  className='mb-[.5rem] font-bold'>Hi</h2>
                <h2 className='mb-[.5rem]  font-bold'>I am <span className='text-sky-800'>Alieu</span></h2>
                <h2 className='mb-[.5rem]  font-bold'>Front-end Web Developer</h2>
                <p className='sm:max-md: text-[1.123rem] md:text-[1.3rem]'>
                    I’m a passionate front-end web developer with a strong foundation 
                    in HTML, CSS, JavaScript, and React
                </p>
            </motion.div>
            <motion.img src={heroImg} alt="" className='sm:max-md: order-first 
                sm:max-md: w-full md:order-last rounded-[10px] sm:max-md: mb-[2rem] 
                sm:max-md: h-70 object-cover md:w-1/4 md:h-80 md:min-w-[270px]
                md:max-lg: max-w-[300px] md:max-lg: mr-auto' 
                variants={childrenVariant}
                initial ={{opacity: 0, y: -300}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 1.5}}
                viewport={{once: true}}

            />

        </motion.div>

    )
}

export default Home