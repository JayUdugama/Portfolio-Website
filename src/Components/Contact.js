import React from 'react'
import {Styles} from '../Util/Style'
import ContactImg from '../Assests/Contact.png'

function Contact() {
  return (
    <div>
        <div className='flex-row items-center pl-5 justify-center pt-3' id='Cont'>
            <span className={Styles.sectionHeadText}>
                Contact
            </span>
            <hr className='w-[35%]'></hr>
            </div>
            <div className='mt-5'>
                <div className='flex flex-wrap flex-row justify-around'>
                    <div className='lg:w-[40%]'>
                        <form className='m-5 flex flex-col gap-3'>
                            <label className='flex flex-col gap-3'>
                                <span className='text-green-700 fnt-medium mb-2'>
                                    You Name
                                </span>
                                <input
                                type='text'
                                name='name'
                                placeholder='You name here'
                                className='bg-pink-200 py-4 px-6 placeholder:text-secondary text-orange-500 rounded-lg outline-none border-none font-medium'>
                                </input>
                            </label>


                            <label className='flex flex-col gap-3'>
                                <span className='text-green-700 fnt-medium mb-2'>
                                    You Email
                                </span>
                                <input
                                type='email'
                                name='email'
                                placeholder='You email here'
                                className='bg-pink-200 py-4 px-6 placeholder:text-secondary text-orange-500 rounded-lg outline-none border-none font-medium'>
                                </input>
                            </label>


                            <label className='flex flex-col gap-3'>
                                <span className='text-green-700 font-medium mb-2'>
                                    You Message
                                </span>
                                <textarea
                                rows={5}
                                name='name'
                                placeholder='You name here'
                                className='bg-pink-200 py-4 px-6 placeholder:text-secondary text-orange-500 rounded-lg outline-none border-none font-medium'>
                                </textarea>
                            </label>
                            <button
                            type='submit'
                            className='bg-slate-100 hover:shadow-pink-300 py-3 px-8 mb-4 m-4 rounded-xl outline-none w-fit text-black font-bold shadow-md shadow-primart'>
                                Submit

                            </button>
                        </form>

                    </div>
                    <div className='lg:w-[50%]'>
                        <img src={ContactImg} alt='Contact'/>
                    </div>

                </div>

            </div>
    </div>
  )
}

export default Contact