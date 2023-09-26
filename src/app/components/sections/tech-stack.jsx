import React from 'react'

const TechStackSection = () => {
    return (
        <div>
            <section id="tech-stack" className='mt-24 h-screen'>
                <p className='text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-extrabold pb-3 mb-4 gradient-text'>Tech Stack</p>
                <div className='grid grid-cols-1 md:grid-cols-12 gap-2'>
                    <div className="col-span-12 lg:col-span-3 sm:col-span-6 transition transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none">
                        <div className='text-xl md:text-2xl xl:text-3xl'>
                            <div className='bg-primary dark:bg-dark-primary text-white dark:text-dark-bg px-4 py-2'>
                                <p className='text-center'>Frontend</p>
                            </div>
                            <div className='bg-slate-100 dark:bg-dark-bg text-base font-semibold text-center border-4 border-primary dark:border-dark-primary rounded-b-md md:h-[26rem]'>
                                <p className='tech-stack-p'>HTML5</p>
                                <p className='tech-stack-p'>CSS3</p>
                                <p className='tech-stack-p'>Bootstrap 5</p>
                                <p className='tech-stack-p'>Tailwind</p>
                                <p className='tech-stack-p'>Javascript</p>
                                <p className='tech-stack-p'>Typescript</p>
                                <p className='tech-stack-p'>Angular 2+</p>
                                <p className='tech-stack-p'>React Js</p>
                                <p className='tech-stack-p'>Next.js</p>
                                <p className='tech-stack-p'>Redux-Toolkit</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-3 sm:col-span-6 transition transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none">
                        <div className='text-xl md:text-2xl xl:text-3xl'>
                            <div className='bg-primary dark:bg-dark-primary text-white dark:text-dark-bg px-4 py-2'>
                                <p className='text-center'>Backend</p>
                            </div>
                            <div className='bg-slate-100 dark:bg-dark-bg text-base font-semibold text-center border-4 border-primary dark:border-dark-primary rounded-b-md md:h-[26rem]'>
                                <p className='tech-stack-p'>Node.js</p>
                                <p className='tech-stack-p'>Express.js</p>
                                <p className='tech-stack-p'>Postman</p>
                                <p className='tech-stack-p'>My SQL</p>
                                <p className='tech-stack-p'>Mongodb</p>
                                <p className='tech-stack-p'>AWS(EC2, S3)</p>
                                <p className='tech-stack-p'>Docker</p>
                                <p className='tech-stack-p'>Microservices</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-3 sm:col-span-6 transition transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none">
                        <div className='text-xl md:text-2xl xl:text-3xl'>
                            <div className='bg-primary dark:bg-dark-primary text-white dark:text-dark-bg px-4 py-2 '>
                                <p className='text-center'>Version Control</p>
                            </div>
                            <div className='bg-slate-100 dark:bg-dark-bg text-base font-semibold text-center border-4 border-primary dark:border-dark-primary rounded-b-md md:h-[26rem]'>
                                <p className='tech-stack-p'>Git</p>
                                <p className='tech-stack-p'>GitHub</p>
                                <p className='tech-stack-p'>GitLab</p>
                                <p className='tech-stack-p'>Bit Bucket</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-3 sm:col-span-6 transition transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none">
                        <div className='text-xl md:text-2xl xl:text-3xl'>
                            <div className='bg-primary dark:bg-dark-primary text-white dark:text-dark-bg px-4 py-2 '>
                                <p className='text-center'>Other Softwares</p>
                            </div>
                            <div className='bg-slate-100 dark:bg-dark-bg text-base font-semibold text-center border-4 border-primary dark:border-dark-primary rounded-b-md md:h-[26rem]'>
                                <p className='tech-stack-p'>Jira</p>
                                <p className='tech-stack-p'>Trello</p>
                                <p className='tech-stack-p'>Slack</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TechStackSection;