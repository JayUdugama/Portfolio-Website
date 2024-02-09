import React from 'react'
import Profile from '../Assests/Profile.png'
import { Styles} from '../Util/Style'
import Resume from '../Assests/Resume.pdf'
import {TiArrowDownOutline} from "react-icons/ti"
import '../App.css'

function About() {
  return (
    <div className='flex flex-wrap justify-center items-center mt-10 p-10 ' id='Home' >

        <div className='flex-1 py-4' >
            <span className={Styles.heroHeadText}>
                Hi, I'm <span className='text-orange-600'>
                    Jayani Hansani
                </span>

                <br/>
                <span className={Styles.heroSubText}>
                I am a passionated Full-Stack Software Engineer
                </span>
            </span>
            <br/>
            <div className='w-[14ren]'>
                <a href={Resume}
                download="Resume"
                target='blank'
                rel="noreferrer"
                >
                    <div className='p-4 mt-2 w-[13rem] rounded-xl text-orange-500 flex justify-center border-2 border-orange-500 hover:border-green-500 shadow-lg hover:shadow-pink-500 '><TiArrowDownOutline className='text-lg mr-3 mt-1 text-orange-500'></TiArrowDownOutline>
                        Resume
                    </div>


                </a>

            </div>



        </div>
        <div className='flex flex-wrap'>
            <img src={Profile} alt='profile' className='element object-contain p-4'/>

        </div>

    </div>
  )
}

export default About;