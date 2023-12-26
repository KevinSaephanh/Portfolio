'use client';

import { ProgressBar } from '@/components/ProgressBar/ProgressBar';
import Image from 'next/image';
import React from 'react';

const technologies = [
  {
    title: 'AWS',
    proficiency: 60,
    color: 'rgb(0, 230, 0)',
  },
  {
    title: 'React',
    proficiency: 80,
    color: 'rgb(135, 206, 235)',
  },
  {
    title: 'Angular',
    proficiency: 90,
    color: 'rgb(45, 212, 196)',
  },
  {
    title: 'NodeJS',
    proficiency: 90,
    color: 'rgb(156, 54, 252)',
  },
  {
    title: 'Spring Boot',
    proficiency: 90,
    color: 'rgb(255, 37, 37)',
  },
];

export default function Page() {
  const lvl = Math.floor(
    (new Date().getTime() - new Date('1993-12-01').getTime()) / 3.15576e10
  );

  return (
    <div className='p-5 flex flex-col md:flex-row items-center justify-between mx-0 md:mx-auto w-full md:w-4/5 lg:w-3/5'>
      <section className='flex flex-col w-full md:w-1/3 items-center md:items-start mt-0 mb-auto'>
        <Image
          src='/assets/me.jpg'
          alt='me'
          height={300}
          width={300}
          className='themed-border mb-4'
        />
        <div className='flex flex-col w-4/5 md:w-full mb-4 space-y-2 text-lg md:text-xl'>
          <span className='text-2xl md:text-3xl'>Kevin Saephanh</span>
          <span>Software Developer</span>
          <span title={`I am ${lvl} years old`}>
            <strong className='dark:text-teal-300'>LV</strong> {lvl}
          </span>
          <span>
            <strong className='dark:text-teal-300'>{'HP'}</strong> 1000/1000
          </span>
          <div title='health-bar' className='h-4 mt-2 bg-green-500 rounded' />
          <span>
            <strong className='dark:text-teal-300'>{'MP'}</strong> 1000/1000
          </span>
          <div title='mana-bar' className='h-4 mt-2 bg-blue-500 rounded' />
        </div>
      </section>

      <section className='flex flex-col w-full md:w-3/5 mt-0 mb-auto'>
        <p>
          Hi, I&apos;m Kevin, a Full Stack Developer from California. I started
          off my coding journey pretty late into college with the introduction
          to Computer Science using C++. Although I wasn&apos;t able to make the
          switch in major to CS, I still enrolled in as many courses as I would
          be allowed. Through these courses, I was able learn the basics of
          programming by creating beginner-level programs such as payroll
          systems, calculators, and console games.
          <br />
          <br />
          My continued interest eventually motivated me to try and pursue a
          career in software development. Fortunately for me, I was able to
          attend a coding bootcamp after college to learn new technologies and
          network with others. This enabled me to get my foot in the door and
          kickstart my career as a developer!
        </p>

        <ul className='mt-4 md:mt-6'>
          {technologies.map((tech, key) => (
            <li
              key={key}
              title={`Proficieny with ${tech.title}: ${tech.proficiency}`}
              className='flex flex-col mb-4'
            >
              <span className='pb-2 font-bold'>{tech.title}</span>
              <ProgressBar maxPercent={tech.proficiency} color={tech.color} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
