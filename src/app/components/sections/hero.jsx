"use client";
import React from 'react';
import HeroImage from "../../../../public/hero-image.png";
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const HeroSection = () => {
    return (
        <section id="home">
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center mb-10 lg:mr-7 xl:mr-0 text-center sm:text-left">
                    <h1 className='text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-extrabold pb-1 mb-4 from-primary via-pink-800 to-pink-900 dark:from-dark-primary dark:via-pink-800 dark:to-pink-900 bg-gradient-to-r bg-clip-text text-transparent'>
                        <span>{`Hello, I'm`}</span>
                        <br />
                        <span>
                            <TypeAnimation
                                sequence={[
                                    'Divyesh Dharjiya',
                                    1000,
                                    'Full Stack Developer',
                                    1000,
                                    'Good Team Player',
                                    1000,
                                    'Frontend Developer',
                                    1000,
                                    'Backend Developer',
                                    1000
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ fontSize: '0.80em', display: 'inline-block', color: 'primary' }}
                                repeat={Infinity}
                            />
                        </span>
                    </h1>
                    <div className='my-5'>
                        <div className='flex justify-center md:justify-start font-bold'>
                            <Link href="https://github.com/divyesh-dharjiya" target="_blank" aria-label="GitHub">
                                <div className="text-3xl text-primary dark:text-dark-primary p-2 border-2 hover:text-white hover:bg-primary dark:hover:bg-dark-primary dark:hover:text-dark-bg border-primary dark:border-dark-primary rounded-full m-1">
                                    <FaGithub />
                                </div>
                            </Link>
                            <Link href="https://www.linkedin.com/in/divyeshdharjiya/" target="_blank" aria-label="LinkedIn">
                                <div className="text-3xl text-primary dark:text-dark-primary p-2 border-2 hover:text-white hover:bg-primary dark:hover:bg-dark-primary dark:hover:text-dark-bg border-primary dark:border-dark-primary rounded-full m-1">
                                    <FaLinkedin />
                                </div>
                            </Link>
                        </div>
                    </div>
                    <p className='text-xl mb-2 font-medium'>
                        With a burning passion for solving complex problems and a commitment to delivering seamless digital solutions, I invite you to explore my world of web development creativity.
                    </p>
                    <p className='text-xl md:text-2xl lg:text-3xl font-bold py-3'>(B.E) - Information Technology</p>
                    <Link href="mailto:divyesh97222@gmail.com">
                        <button className='primary-button px-6 py-3 w-auto s:w-fit mr-2 md:mr-4'>Hire Me</button>
                    </Link>
                    <Link target='_blank' href="https://drive.google.com/file/d/1gv2YulhbJKYKhzAB07t6IZq85JJiSSsE/view?usp=drive_link">
                        <button className='primary-button px-6 py-3 w-auto s:w-fit mt-3'>
                            Download CV
                        </button>
                    </Link>
                    <div className='mt-5'>
                        <div className='flex justify-center md:justify-start font-bold'>
                            <div className='bg-off-white dark:bg-dark-bg border-t-[3px] border-l-[3px] border-b-[3px] border-primary dark:border-dark-primary'>
                                <div className='bg-primary dark:bg-dark-primary text-white dark:text-dark-bg px-7'>Projects</div>
                                <div className='text-center text-2xl'>25+</div>
                            </div>
                            <div className='bg-off-white dark:bg-dark-bg border-[3px] border-primary dark:border-dark-primary'>
                                <div className='bg-primary dark:bg-dark-primary text-white dark:text-dark-bg px-7'>Experience</div>
                                <div className='text-center text-2xl'>4+</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-5 place-self-center">
                    <div className="rounded-full bg-primary dark:bg-dark-primary w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <Image src={HeroImage} alt='hero-image' height={300} width={300} className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;