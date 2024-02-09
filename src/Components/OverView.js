import React from 'react'
import Tilt from 'react-parallax-tilt'
import { Styles } from '../Util/Style'
import { technologies, services } from '../Constants'
import { motion } from "framer-motion"
import './style.css'

function OverView() {


  return (
    <div>
      <div className='flex-row items-center pl-5 justify-center pt-3' id='Overview'>
        <span className={Styles.sectionHeadText}>
          Introduction
        </span>
        <hr className='w-[35%]'></hr>
        <div className={Styles.sectionText} >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>

      </div>
      <div className='flex flex-wrap justify-center'>
        {services.map((service) => (
          <div>
            <Tilt
              key={service.icon}
              className="parallax-effect-glare-scale"
              perspective={500}
              glareColor="fed7aa"
              glareEnable={true}
              glareMaxOpacity={0.50}
              sale={1.02}
              gyroscope={true}>

              <div className='p-3 m-3 flex flex-col justify-evenly items-center border-2 border-green-400 rounded-xl' style={{
                background: `linear-gradient(to bottom, #000000 0%, #1f1f1f 100%)`, // Adjust gradient colors as needed
              }}>
                < img className='h-[100px] w-[100px] ' src={service.icon} alt={service.title} />


                <div className=' m-5 text-green-500 '>
                  {service.title}

                </div>

              </div>

            </Tilt>
          </div>

        ))


        }
      </div>
      <div className=" flex flex-wrap justify-center items-center ">
        {technologies.map((technology) =>
        (
          <div
            key={technology.name}
            className='m-4 mt-5 h-[100px] w-[100px] rounded-3xl shadow-2xl border-[1px] border-green-400
              hover:shadow-orange-300'>
            <img className='p-2' src={technology.icon} alt={technology.name} />
            <div className='text-green-600 justify-center flex'>
              {technology.name}

            </div>

          </div>
        )


        )}





      </div>

    </div>

  )
}

export default OverView;