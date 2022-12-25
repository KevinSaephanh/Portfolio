import clsx from 'clsx';
import React from 'react';

const socials = [
  {
    icon: 'fa fa-linkedin',
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/kevin-saephanh',
  },
  {
    icon: 'fa fa-square-github',
    title: 'Github',
    link: 'https://github.com/KevinSaephanh',
  },
  {
    icon: 'fa fa-twitter',
    title: 'Twitter',
    link: 'https://twitter.com/KevCoolio93',
  },
  {
    icon: 'fa-brands fa-discord',
    title: 'Discord',
    link: 'https://www.discord.com/users/360657658270973956',
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className='text-center w-full pb-4'>
      <ul className='flex items-center justify-center space-x-2 mb-2 w-5/6 md:w-full'>
        {socials.map((social, key) => (
          <li className='text-2xl' key={key}>
            <a href={social.link}>
              <i
                className={clsx('hover:text-teal-300', `${social.icon}`)}
                title={social.title}
                aria-hidden='true'
              />
            </a>
          </li>
        ))}
      </ul>
      <span className='text-md'>© 2022 Kevin Saephanh</span>
    </footer>
  );
};
