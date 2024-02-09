import React from 'react'
import { Styles } from '../Util/Style'
import { projects } from '../Constants'
import Tilt from 'react-parallax-tilt'
import { SiGithub, SiYoutube } from 'react-icons/si'

// ... (previous imports)

// ... (previous imports)

function Project() {
  return (
    <div>
      <div className='flex-row items-center pl-5 justify-center pt-3' id='Projects'>
        <span className={Styles.sectionHeadText}>
          Projects
        </span>
        <hr className='w-[35%]'></hr>
        <div className={Styles.sectionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>

      <div className='flex flex-wrap p-8 justify-evenly items-center'>
        {projects.map((project) => (
          <Tilt key={project.name} className='w-[300px] h-[500px] flex flex-col justify-center shadow-2xl m-1 items-center hover:shadow-2xl
            hover:shadow-green-400 shadow-pink-300 p-3 rounded-xl border-2 border-green-900'>
            {/* Project Image */}
            <div className="mb-1">
              <img src={project.image} alt={project.name} className='h-[200px] w-[250px] border-2 border-pink-200
                  rounded-2xl' />
            </div>

            <div className='flex flex-col items-center'>
              {/* Source Links */}
              <div className='flex mb-1'>
                <a href={project.source_deploy_link} target='_blank' rel='noopener noreferrer'
                  className='h-[40px] w-[40px] m-3 bg-slate-50 rounded-full shadow-lg shadow-green-500
                    flex justify-center items-center'>
                  <SiYoutube className="text-3xl font-bold text-green-600"></SiYoutube>
                </a>
                <a href={project.source_code_link} target='_blank' rel='noopener noreferrer'
                  className='h-[40px] w-[40px] m-3 bg-slate-50 rounded-full shadow-lg shadow-green-500
                    flex justify-center items-center'>
                  <SiGithub className="text-3xl font-bold text-green-600"></SiGithub>
                </a>
              </div>

              {/* Project Name */}
              <div className='text-2xl text-green-600 font-extrabold'>
                {project.name}
              </div>

              {/* Project Description */}
              <div className='text-center'>
                <span className='text-orange-500'>
                  {project.description}
                </span>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
}

export default Project;
