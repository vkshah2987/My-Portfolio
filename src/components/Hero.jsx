import { motion } from 'framer-motion';
import { styles } from '../styles'
import { ComputersCanvas } from './canvas';
import { heroProfile, arrowUp } from '../assets';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto flex justify-center'>
      <div className={`${styles.paddingX} !py-[60px] absolute inset-0 top-[120px] max-w-7xl !mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#276E6B]' />
          <div className='w-1 sm:h-80 h-80 bg-gradient-to-b from-[#276E6B] to-[#F8F7F1]' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-[#0E2F3E]`}>Hi, I'm <span className='text-[#EDB33C]'>Vishal</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-[#0E2F3E]`}>
            I develop 3D visuals, user
            <br className='sm:block hidden' />
            interfaces and web applications
          </p>
        </div>
      </div>

      <ComputersCanvas />

      {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
               }}
               className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div> */}

      {/* <div className='w-full max-w-7xl'>
        <div className='w-full h-full flex justify-center items-end relative'>

          <div className='flex flex-col gap-4 absolute left-[0px] bottom-[35vw] !font-mono text-green-600'><span className='font-aladin text-6xl text-[#0E2F3E]'>Hy! I Am</span><span className='text-[2.4rem] mt-[100px] font-bold text-[#EDB33C]'>Vishal Kumar Shah.</span></div>
          <div className='flex gap-4 items-center absolute left-[0px] bottom-[12vw] text-green-600'>
            <h4 className='text-[2.5rem] font-bold text-[#276E6B]'>02</h4>
            <div className='text-xl text-[#0E2F3E] font-medium'>
              YEARS <br /> EXPERIENCE
            </div>
          </div>
          <div className='flex gap-12 items-center absolute left-[0px] bottom-[3vw] text-3xl text-[#EDB33C]'>
            <i className="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-x-twitter"></i>
            <i class="fa-brands fa-linkedin-in"></i>
            <i class="fa-brands fa-github"></i>
          </div>

          <img src={heroProfile} alt="" className='lg:w-[50vh] lg:top-[50%] transform- xl:w-[35vw] w-[35vw] absolute xl:bottom-[50px] z-1' />
          <img src={arrowUp} alt="" className='w-[18vw] absolute bottom-[20vw] left-[6vw]' />

          <div className='absolute right-[0px] bottom-[40vw] text-green-600'><p className='w-[18vw] text-right text-xl text-[#0E2F3E] font-medium'>I design beautifully simple things, and I love what i do.</p></div>
          <div className="absolute right-[0px] bottom-[3vw] w-[12vw] text-green-600 flex flex-col gap-[-100px]">
            <div className="font-qwitcher font-bold text-7xl text-[#0E2F3E]">Creative</div>
            <div className="flex justify-end text-[2rem] font-semibold text-[#276E6B]">Designer.</div>
          </div>
        </div>
      </div> */}
    </section>
  )
}

export default Hero