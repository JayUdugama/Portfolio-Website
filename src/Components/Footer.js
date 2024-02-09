import React from 'react';
import { GrLinkedin, GrMail, GrGithub } from 'react-icons/gr';

function Footer() {
  return (
    <div>
      <div className='w-screen bg-white'>
        <div className='flex flex-row p-2 flex-wrap justify-around'>
          <a href='https://www.linkedin.com/' target='_blank' rel='noopener noreferrer' className='text-lg flex items-center'>
            <div className='h-30 w-30 rounded-full flex justify-center items-center bg-green-400'>
              <GrLinkedin className="text-black" />
            </div>
            <span className='text-black ml-1 mt-0.1rem'>Jayani</span>
          </a>

          <a href='hansani.jay33@gmail.com' target='_blank' rel='noopener noreferrer' className='text-lg flex items-center'>
            <div className='h-30 w-30 rounded-full flex justify-center items-center bg-green-400'>
              <GrMail className="text-black" />
            </div>
            <span className='text-black ml-1 mt-0.1rem'>Jayani</span>
          </a>

          <a href='https://www.gihub' target='_blank' rel='noopener noreferrer' className='text-lg flex items-center'>
            <div className='h-30 w-30 rounded-full flex justify-center items-center bg-green-400'>
              <GrGithub className="text-black" />
            </div>
            <span className='text-black ml-1 mt-0.1rem'>Jayani</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
