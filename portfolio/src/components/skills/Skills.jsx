import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
import './skills.css'

const Skills = () => {
  return (
    <section id='skills'>
        <h2>My Skills</h2>
        <div className='container skills__container'>
            <div className='skills__frontend'>
                <h3>Frontend Development</h3>
                <div className='skills__content'>
                    <article className='skills__details'>
                        <BsPatchCheckFill className='skills_details-icon' />
                        <div><h4>Next.JS</h4>
                        <small className='text-light'>Experience</small>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <BsPatchCheckFill className='skills_details-icon' />
                        <div><h4>React</h4>
                        <small className='text-light'>Experience</small>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <BsPatchCheckFill className='skills_details-icon' />
                        <div><h4>Javascript</h4>
                        <small className='text-light'>Experience</small>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <BsPatchCheckFill className='skills_details-icon' />
                        <div><h4>Typescript</h4>
                        <small className='text-light'>Experience</small>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <BsPatchCheckFill className='skills_details-icon' />
                        <div><h4>HTML</h4>
                        <small className='text-light'>Experience</small>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <BsPatchCheckFill className='skills_details-icon' />
                        <div><h4>CSS</h4>
                        <small className='text-light'>Experience</small>
                        </div>
                    </article>
                </div>
            </div>
            {/* Back end */}
            <div className='skills__backend'>
                <h3>Backend Development</h3>
                <div className='skills__content'>
                    <article className='skills__details'>
                        <BsPatchCheckFill className='skills_details-icon' />
                        <div><h4>Node.JS</h4>
                        <small className='text-light'>Experience</small></div>
                    </article>
                    <article className='skills__details'>
                        <BsPatchCheckFill className='skills_details-icon' />
                        <div><h4>Express</h4>
                        <small className='text-light'>Experience</small>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <BsPatchCheckFill className='skills_details-icon' />
                        <div><h4>Javascript</h4>
                        <small className='text-light'>Experience</small>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <BsPatchCheckFill className='skills_details-icon' />
                        <div><h4>Typescript</h4>
                        <small className='text-light'>Experience</small>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <BsPatchCheckFill className='skills_details-icon' />
                        <div><h4>MongoDB</h4>
                        <small className='text-light'>Experience</small>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <BsPatchCheckFill className='skills_details-icon' />
                        <div><h4>Docker</h4>
                        <small className='text-light'>Experience</small>
                        </div>
                    </article>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Skills